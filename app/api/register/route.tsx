import { NextResponse } from "next/server"

export async function POST(req:Request){
    try {
        const {name, email, password} =  await req.json()
        console.log(name)
        console.log(email)
        console.log(password)
        return NextResponse.json({message: 'user registration successfull'},{status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'error accured white user ragistring'},{status: 500})
    }
}