import type { HttpContext } from '@adonisjs/core/http'
import string from '@adonisjs/core/helpers/string'

export default class AppsController {

    getServices(): Array<{ id: number, title: string, image: string, price: string, content: string }> {
        const services: Array<{ id: number, title: string, image: string, price: string, content: string }> = [
            { id: 1, title: 'Follow-up during the Process', image: 'recent-work-01.jpg', price: '599 €', content: 'We provide continuous support and follow-up throughout your visa application process. From submitting documents to final approval, we keep you informed at every stage and ensure everything is on track for a smooth journey' },
            { id: 2, title: 'AVI (Irrevocable Bank Transfer Certificate)', image: 'recent-work-02.jpg', price: '499 €', content: 'An Irrevocable Bank Transfer Certificate (AVI) is a guarantee of payment required by some embassies. We assist you in obtaining this document to ensure that your financial support is verified and compliant with visa requirements' },
            { id: 3, title: 'Accommodation Search', image: 'recent-work-03.jpg', price: '349 €', content: 'Finding the right place to stay abroad can be challenging. Our team helps you find secure and comfortable accommodation options that meet your preferences and budget, ensuring you settle in with ease.' },
            { id: 4, title: 'Travel Insurance', image: 'recent-work-04.jpg', price: '250 €', content: "We offer comprehensive travel insurance plans to ensure you're protected during your trip. Our insurance covers medical emergencies, trip cancellations, lost luggage, and more, giving you peace of mind throughout your journey." },
            { id: 5, title: "Appeal in Case of Visa Refusal", image: 'recent-work-05.jpg', price: '399 €', content: 'If your visa application is refused, don’t worry. We assist you in the appeal process, providing expert advice and support to maximize your chances of getting a successful outcome upon reapplication.' },
            { id: 6, title: 'Flight Ticket Purchase', image: 'recent-work-06.jpg', price: '49 €', content: 'We simplify your travel plans by helping you purchase affordable and flexible flight tickets. Our team compares various airlines and routes to find the best deals, ensuring you travel at the most convenient times.' },
        ]
        return services
    }

    getArticles(): Array<{ id: number, category: string, image: string, title: string, content: string }> {
        const articles: Array<{ id: number, category: string, image: string, title: string, content: string }> = [
            { id: 1, category: 'Travel', image: 'our-work-01.jpg', title: 'Travel Tips: How to Prepare for Your First International Trip', content: "In this article, we provide essential tips for first-time travelers, from booking flights to understanding local customs and preparing for international travel. We’ll guide you through the necessary steps to ensure a smooth and enjoyable experience, whether you're traveling for study, work, or leisure." },
            { id: 2, category: 'Insurance', image: 'our-work-02.jpg', title: 'Why Travel Insurance is a Must for International Journeys', content: "Traveling abroad can come with unexpected risks. This article explains the importance of having travel insurance, including coverage for medical emergencies, cancellations, lost baggage, and trip delays. We also outline what to look for in a travel insurance policy and how it can give you peace of mind during your travels." },
            { id: 3, category: 'Travel', image: 'our-work-03.jpg', title: 'Top Destinations for International Students: Where to Study Abroad', content: "For students looking to study abroad, choosing the right destination is key. This blog post highlights top destinations for international students, including the benefits of each country, the quality of education, and the cultural experiences students can expect. We also offer tips on how to navigate visa applications for these countries." },
            { id: 4, category: 'Housing', image: 'our-work-04.jpg', title: 'How Housing Abroad Works: Finding the Perfect Place to Stay', content: "Finding the right accommodation abroad can be a challenge. In this article, we explain how to search for housing options, what to consider when choosing a place to stay, and how to avoid common pitfalls. We also give advice on understanding rental contracts, student accommodations, and the best platforms for booking housing internationally." },
            { id: 5, category: 'AVI', image: 'our-work-05.jpg', title: 'The AVI (Irrevocable Bank Transfer Certificate): What It Is and Why You Need It', content: "An AVI is often required by embassies when applying for a visa. This article provides a comprehensive guide on what an Irrevocable Bank Transfer Certificate is, why it's important, and how to obtain one. We explain how it helps prove your financial capacity and ensures your visa application is processed smoothly." },
            { id: 6, category: 'Travel', image: 'our-work-06.jpg', title: 'How to Handle Visa Refusals: Steps to Appeal and Reapply', content: "This article covers the steps you should take if your visa application is refused. From understanding the reasons behind the refusal to gathering necessary documentation for an appeal, we guide you through the process of reapplying successfully. We also discuss how to avoid common mistakes that lead to visa denials in the first place." },
            { id: 7, category: 'Insurance', image: 'our-work-01.jpg', title: 'Traveling with Confidence: The Role of Insurance in International Travel', content: "This article delves deeper into the role of insurance for international travelers, highlighting the different types of coverage you might need, such as health insurance, trip cancellation insurance, and luggage protection. We explain how having the right insurance can help you avoid costly surprises and ensure a stress-free journey abroad." },
        ]
        return articles
    }

    findArticle(id: number) {
        const articles: Array<{ id: number, image: string, title: string, content: string }> = this.getArticles()
        const found = articles.find((element) => element.id == id);
        return found
    }

    home({ view }: HttpContext) {
        const data = {
            post: {
                comments: []
            }
        }
        return view.render('pages/home', data)
    }

    services({ view }: HttpContext) {
        const services = this.getServices()
        return view.render('pages/services', { services })
    }

    prices({ view }: HttpContext) {
        return view.render('pages/prices')
    }

    articles({ view, params }: HttpContext) {
        const id = params.id
        if (id) {
            const article = this.findArticle(id)
            return view.render('pages/articles-detail', { article })
        }
        const articles = this.getArticles().map((element) => {
            element.category = string.titleCase(element.category)
            element.title = string.truncate(element.title, 14, { completeWords: true, })
            element.content = string.truncate(element.content, 100, { completeWords: true, })
            return element
        })
        const categories = [...new Set(articles.map((element) => element.category))]
        return view.render('pages/articles', { categories, articles })
    }

    events({ view }: HttpContext) {
        return view.render('pages/events')
    }

    about({ view }: HttpContext) {
        return view.render('pages/about')
    }

    contact({ view }: HttpContext) {
        return view.render('pages/contact')
    }

    signin({ view }: HttpContext) {
        return view.render('pages/signin')
    }

    signup({ view }: HttpContext) {
        return view.render('pages/signup')
    }

}