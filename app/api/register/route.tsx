import { NextResponse } from "next/server"

export async function POST(req:Request){
    try {
        const {name, email, password} =  await req.json()
        return NextResponse.json({message: 'user registration successfull'},{status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}