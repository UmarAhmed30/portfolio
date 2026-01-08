export default function Accolades() {
    const awards = [
        {
            organization: "Art Directors Club (ADC)",
            award: "93rd Annual Awards, Interactive, Silver",
            year: "2014",
            project: "Squarespace.com \"Create Your Own Space\"",
            link: "http://adcglobal.org/wp-content/uploads/2014/04/WinnersNightTwoFINAL.pdf"
        },
        {
            organization: "The Webby Awards",
            award: "21st Annual Awards, Web Services & Applications",
            year: "2017",
            project: "Squarespace",
            link: "http://webbyawards.com/winners/2017/websites/general-website/web-services-applications/squarespace/"
        },
        {
            organization: "The Webby Awards",
            award: "20th Annual Awards, Web Services & Applications",
            year: "2016",
            project: "Squarespace",
            link: "http://webbyawards.com/winners/2016/websites/general-website/web-services-applications/squarespace/"
        },
        {
            organization: "The Webby Awards",
            award: "18th Annual Awards, Web Services & Applications",
            year: "2014",
            project: "Squarespace",
            link: "http://webbyawards.com/winners/2014/websites/general-website/web-services-applications/squarespace/"
        },
        {
            organization: "The Webby Awards",
            award: "18th Annual Awards, Best Visual Design - Aesthetic",
            year: "2014",
            project: "Squarespace.com",
            link: "http://www.webbyawards.com/winners/2014/web/website-features-and-design/best-visual-design-aesthetic/squarespace"
        },
        {
            organization: "The Webby Awards",
            award: "18th Annual Awards, Best Home/Welcome Page",
            year: "2014",
            project: "Squarespace.com",
            link: "http://www.webbyawards.com/winners/2014/web/website-features-and-design/best-homewelcome-page/squarespace"
        },
        {
            organization: "The Webby Awards",
            award: "17th Annual Awards, Best Home/Welcome Page",
            year: "2013",
            project: "Squarespace.com",
            link: "http://winners.webbyawards.com/2013/web/website-features-and-design/best-homewelcome-page/squarespace"
        },
        {
            organization: "Communication Arts",
            award: "Interactive Annual 20, Websites/Microsites",
            year: "2014",
            project: "Squarespace.com \"Create Your Own Space\"",
            link: "http://www.commarts.com/gallery/interactive/all/all/2014/61938/1"
        },
        {
            organization: "Communication Arts",
            award: "Webpick of the Day",
            year: "2014",
            project: "BillySweeney.com",
            link: "http://www.commarts.com/webpicks/billy-sweeney"
        },
        {
            organization: "AWWWARDS",
            award: "Site of the Day",
            year: "2014",
            project: "The Official Squarespace Blog",
            link: "https://www.awwwards.com/sites/the-official-squarespace-blog"
        },
        {
            organization: "AWWWARDS",
            award: "Site of the Day",
            year: "2013",
            project: "Squarespace.com \"Create Your Own Space\"",
            link: "https://www.awwwards.com/sites/squarespace-create-your-own-space"
        },
        {
            organization: "AWWWARDS",
            award: "Site of the Day",
            year: "2012",
            project: "Squarespace.com",
            link: "https://www.awwwards.com/sites/squarespace"
        },
        {
            organization: "Favourite Website Awards (FWA)",
            award: "Site of the Day",
            year: "2013",
            project: "Squarespace.com \"Create Your Own Space\"",
            link: "https://thefwa.com/cases/squarespace-create-your-own-space"
        },
        {
            organization: "Site Inspire",
            award: "Featured Website",
            year: "2016",
            project: "Squarespace Circle",
            link: "https://www.siteinspire.com/websites/6398-circle-by-squarespace"
        },
        {
            organization: "Site Inspire",
            award: "Featured Website",
            year: "2014",
            project: "The Official Squarespace Blog",
            link: "https://www.siteinspire.com/websites/832-squarespace-blog"
        },
        {
            organization: "Site Inspire",
            award: "Featured Website",
            year: "2013",
            project: "Squarespace.com — Mobile Apps",
            link: "https://www.siteinspire.com/websites/4128-squarespace-mobile-apps"
        },
    ];

    const press = [
        {
            publication: "InVision",
            title: "Inside Design: Squarespace",
            date: "23 January 2017",
            link: "https://www.invisionapp.com/blog/inside-design-squarespace/"
        },
        {
            publication: "The Dots UK",
            title: "The Inside Scoop on The New Squarespace Circle Branding",
            date: "18 November 2016",
            link: "https://the-dots.com/projects/the-inside-scoop-on-the-new-squarespace-circle-branding-145111"
        },
        {
            publication: "Interface Lovers",
            title: "Billy Sweeney",
            date: "13 October 2016",
            link: "https://interfacelovers.com/interviews/billy-sweeney"
        },
        {
            publication: "HOW",
            title: "The Rules of Exposure: Leveraging Photography As a Self-Promotion Tool",
            date: "19 September 2016",
            link: "http://www.howdesign.com/design-career/the-rules-of-exposure-leveraging-photography-as-a-self-promotion-tool/"
        },
        {
            publication: "Design Milk",
            title: "Squarespace Circle + Branding Behind-the-Scenes",
            date: "29 August 2016",
            link: "http://design-milk.com/squarespace-circle-top-photo-shoot/"
        },
    ];

    return (
        <section className="mb-24">
            <div className="mb-20">
                <h2 className="text-2xl font-medium mb-12">Accolades</h2>
                <ul className="space-y-6">
                    {awards.map((award, index) => (
                        <li key={index} className="border-b border-gray-200 pb-6">
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h3 className="font-medium">{award.organization}</h3>
                                    <p className="text-sm text-muted mt-1">{award.award}</p>
                                    <p className="text-sm text-muted">{award.year}</p>
                                    <p className="text-sm text-muted">{award.project}</p>
                                </div>
                                <a 
                                    href={award.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium hover:underline whitespace-nowrap"
                                >
                                    View Award
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-medium mb-12">Press</h2>
                <ul className="space-y-6">
                    {press.map((item, index) => (
                        <li key={index} className="border-b border-gray-200 pb-6">
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h3 className="font-medium">{item.publication}</h3>
                                    <p className="text-sm text-muted mt-1">{item.title}</p>
                                    <p className="text-sm text-muted">{item.date}</p>
                                </div>
                                <a 
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium hover:underline whitespace-nowrap"
                                >
                                    View Article
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
