// /api/clerk/webhook

import { Webhook } from "lucide-react"
import { db } from "@/server/db"

export const POST = async (req: Request) => {
    const {data} = await req.json()
    // console.log( 'webhook reçu',data)
    const email = data.email_addresses[0].email_address
    const firstName = data.first_name
    const lastName = data.last_name
    const imageUrl = data.image_url
    const id = data.id

    await db.user.create({
        data: {
            email,
            firstName,
            lastName,
            imageUrl,
            id
        }
    })

    console.log('done')

    return new Response('ok le sang', {status: 200})
}