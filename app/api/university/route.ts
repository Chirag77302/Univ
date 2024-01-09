import { db } from "@/utils/db";
import cloudinary from "@/cloudinaryConfig";
import { NextResponse,NextRequest } from "next/server";
import bcrypt from "bcrypt";

// export async function GET(req: Request) {
//   try {
//     const mentors = await db.mentor.findMany();
//     return NextResponse.json(mentors);
//   } catch (err) {
//     return NextResponse.json({
//       message: "Error finding the mentors {GET: api/mentor}",
//     });
//   }
// }

export async function POST(req: NextRequest) {
  try {
    let {
      name,
      email,
      password,
      description,
      images,
      bachelor_courses,
      masters_courses,
      address,
      website,
      // rate
    } = await req.json();

    console.log('images at backend are : ', images);
    // const imageUrls = [];

    // for (const image of images) {
    //   const result = await cloudinary.uploader.upload(image.path, {
    //     // upload_preset: 'your_upload_preset',
    //   });
    //   imageUrls.push(result.secure_url);
    // }

    const hashedPassword = await bcrypt.hash(password,10);
    // console.log(hashedPassword);
    bachelor_courses = bachelor_courses.split(",");
    masters_courses = masters_courses.split(",")

    const newuniversity = await db.university.create({
      data: {
        name,
        email,
        password:hashedPassword,
        description,
        images,
        bachelor_courses,
        masters_courses,
        address,
        website,
        // posts
      },
    });
    return NextResponse.json({ message: "Created University", data: newuniversity });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "Error creating mentor {POST: api/university}",
      error: err,
    });
  }
}
