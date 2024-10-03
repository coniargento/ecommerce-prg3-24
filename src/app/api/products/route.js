import { NextResponse } from 'next/server';
import products from '@/app/data/products';

export async function GET() {
  try {
    return NextResponse.json({ message: 'Ok', products });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error });
  }
}

export async function POST() { 
  try {
    return NextResponse.json({ message: 'Ok', products });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error });
  }
}
