import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import { getSubscription } from "@/app/actions/getSubscription";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

// code to instruct for specific response
const instructionMessage = `{navbarLogoText: z.string(),
        navbarLinkText1: z.string(),
        navbarLink1: z.string(),
        navbarLinkText2: z.string(),
        navbarLink2: z.string(),
        navbarLinkText3: z.string(),
        navbarLink3: z.string(),
        resumeText: z.string(),
        resumeLink: z.string(),
        heroTagText: z.string(),
        heroPrimaryButtonText: z.string(),
        heroPrimaryButtonLink: z.string(),
        heroSecondaryButtonText: z.string(),
        heroSecondaryButtonLink: z.string(),
        heroText: z.string(),
        heroDescriptionText: z.string(),
        projectSectionTagText: z.string(),
        projectSectionHeading: z.string(),
        projectSectionBodyText: z.string(),
        projectText1: z.string(),
        projectBody1: z.string(),
        projectLink1: z.string(),
        projectText2: z.string(),
        projectBody2: z.string(),
        projectLink2: z.string(),
        footerText: z.string(),
        footerBodyText: z.string(),
        footerLinkText1: z.string(),
        footerLink1: z.string(),
        footerLinkText2: z.string(),
        footerLink2: z.string(),
        footerLinkText3: z.string(),
        footerLink3: z.string(),
        footerCopyrightText: z.string()
    };
    Use it for generating a response for a portfolio website fill in the relevant details for a `

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { input } = body;

        const currentUser = await getCurrentUser()

        if (!currentUser) return new NextResponse(`Not authorized`, { status: 403 });

        const isPro = await getSubscription()

        if (!isPro) return new NextResponse(`Not subscribed`, { status: 403 });

        // for dummy text
        // return NextResponse.json({
        //     "navbarLogoText": "DevJohn",
        //     "navbarLinkText1": "Home",
        //     "navbarLink1": "/",
        //     "navbarLinkText2": "Projects",
        //     "navbarLink2": "/projects",
        //     "navbarLinkText3": "Contact",
        //     "navbarLink3": "/contact",
        //     "resumeText": "Download Resume",
        //     "resumeLink": "/resume.pdf",
        //     "heroTagText": "Full Stack Developer",
        //     "heroPrimaryButtonText": "Hire Me",
        //     "heroPrimaryButtonLink": "/contact",
        //     "heroSecondaryButtonText": "View Projects",
        //     "heroSecondaryButtonLink": "/projects",
        //     "heroText": "Dev John",
        //     "heroDescriptionText": "I am John, a passionate full-stack developer specializing in creating efficient and scalable web applications. Let's work together to build something amazing.",
        //     "projectSectionTagText": "Featured Work",
        //     "projectSectionHeading": "My Projects",
        //     "projectSectionBodyText": "Here are a few projects I've worked on recently. Want to see more? Head over to my projects page.",
        //     "projectText1": "E-Commerce Platform",
        //     "projectBody1": "A full-featured e-commerce platform with payment integration, admin panel, and real-time notifications.",
        //     "projectLink1": "https://github.com/DevJohn/e-commerce-platform",
        //     "projectText2": "Social Media App",
        //     "projectBody2": "A scalable social media application with real-time messaging, feed, and notifications.",
        //     "projectLink2": "https://github.com/DevJohn/social-media-app",
        //     "footerText": "Let's build something great together.",
        //     "footerBodyText": "Interested in working together? Let's connect!",
        //     "footerLinkText1": "LinkedIn",
        //     "footerLink1": "https://www.linkedin.com/in/devjohn/",
        //     "footerLinkText2": "GitHub",
        //     "footerLink2": "https://github.com/DevJohn",
        //     "footerLinkText3": "Twitter",
        //     "footerLink3": "https://twitter.com/DevJohn",
        //     "footerCopyrightText": "© 2024 DevJohn. All rights reserved."
        // });

        // for gemini
        const {
            GoogleGenerativeAI, FunctionDeclarationSchemaType
        } = require("@google/generative-ai");


        const apiKey = process.env.GEMINI_API_KEY;
        const genAI = new GoogleGenerativeAI(apiKey);

        let model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: { responseMimeType: "application/json" },
        });

        const result = await model.generateContent(instructionMessage + input);

        //  for open ai
        // const response = await openai.chat.completions.create({
        //     model: "gpt-3.5-turbo",
        //     messages: [instructionMessage, ...input],
        // });

        // return NextResponse.json(response.choices[0].message);

        return NextResponse.json(result.response.text());
    } catch (error) {
        return new NextResponse(`Internal Error`, { status: 500 });
    }
}