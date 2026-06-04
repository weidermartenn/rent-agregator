import axios from "axios";

export async function POST(req: Request) {
    const { email, code } = await req.json();

    const response = await axios.post(
        ''
    )
}