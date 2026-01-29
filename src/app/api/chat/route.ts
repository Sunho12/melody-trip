import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface TripContext {
  destination: string;
  country: string;
  continent: string;
  travel_category: string;
  song: string;
  artist: string;
  genre: string;
}

export async function POST(request: NextRequest) {
  try {
    const { message, trips } = (await request.json()) as {
      message: string;
      trips: TripContext[];
    };

    // 사용자의 여행 기록을 컨텍스트로 변환
    const tripContext =
      trips.length > 0
        ? `
사용자의 여행 기록:
${trips
  .map(
    (t) =>
      `- ${t.destination}, ${t.country} (${t.continent}): "${t.song}" by ${t.artist} (${t.genre})`
  )
  .join('\n')}
`
        : '사용자는 아직 여행 기록이 없습니다.';

    const systemPrompt = `당신은 음악과 여행을 연결해주는 전문 AI 도우미입니다.
사용자의 음악 취향을 바탕으로 어울리는 여행지를 추천하거나,
여행지에 어울리는 음악을 추천해주세요.

${tripContext}

추천을 할 때:
1. 음악의 분위기, 장르, 가사의 느낌을 고려해주세요
2. 여행지의 문화, 분위기, 특성을 음악과 연결해주세요
3. 구체적인 이유와 함께 추천해주세요
4. 가능하면 사용자의 기존 여행 기록 패턴을 참고해주세요
5. 친근하고 따뜻한 말투로 대화해주세요
6. 답변은 한국어로 해주세요`;

    const input = `${systemPrompt}\n\n사용자: ${message}`;

    const response = await openai.responses.create({
      model: 'gpt-5-nano',
      input: input,
    });

    const responseMessage =
      response.output_text ||
      '죄송합니다, 응답을 생성하는 데 문제가 발생했습니다.';

    return NextResponse.json({ message: responseMessage });
  } catch (error) {
    console.error('OpenAI API error:', error);

    // API 키가 없는 경우 더미 응답
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your-openai-api-key-here') {
      return NextResponse.json({
        message: `OpenAI API 키가 설정되지 않았습니다. .env.local 파일에 OPENAI_API_KEY를 설정해주세요.

임시 추천 답변:
🎵 잔잔한 인디 음악을 좋아하신다면 제주도나 강릉을 추천드려요!
카페에서 커피 한 잔과 함께 음악을 듣기 좋은 곳이에요.

🎸 신나는 록 음악을 좋아하신다면 런던이나 시애틀을 추천드려요!
록 음악의 역사가 살아 숨쉬는 도시들이에요.`,
      });
    }

    return NextResponse.json(
      { message: '서버 오류가 발생했습니다. 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}
