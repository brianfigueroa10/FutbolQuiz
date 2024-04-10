import prisma from "@/prismadb";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
    const { name, score } = await req.json();
    
    try {
        const result = await prisma.users.create({
            data: {
                name,
                score
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({message: 'Error al registrar el puntaje'})
        
    }
}

export async function GET() {
    try {
        const users = await prisma.users.findMany();
        return NextResponse.json({users})
    } catch (error) {
        return NextResponse.json({message: "No se pudo obtener los puntajes"}, {status: 500})
        
    }
}