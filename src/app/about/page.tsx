import AboutUsHero from '../../components/AboutUsHero'
import AboutUsSDG from '../../components/AboutUsSDG'
import AboutUsFeatures from '../../components/AboutUsFeatures'
import AffiliatesCarousel from '../../components/AffiliatesCarousel'
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function AboutUs() {

  const heroLogo = "/assets/heroLogo.png"
  const heroBackgroundVideo = "/assets/hero-background-video.mp4"
  const sdgLogo = '/assets/sdgLogo.png'
  const AboutUsFeatureImg1 = "/assets/AboutUsFeatureImg1.png"
  const AboutUsFeatureImg2 = "/assets/AboutUsFeatureImg2.png"
  const AboutUsFeatureImg3 = "/assets/AboutUsFeatureImg3.png"
  const AboutUsFeatureImg4 = "/assets/AboutUsFeatureImg4.png"
  const porscheLogo = '/assets/porsche-logo.png';
  const backgroundVideo = '/assets/background-video.mp4';
  const affiliates = [
    { id: 1, name: 'Porsche Placeholder 1', logo: porscheLogo, link: '#' },
    { id: 2, name: 'Porsche Placeholder 2', logo: porscheLogo, link: '#' },
    { id: 3, name: 'Porsche Placeholder 3', logo: porscheLogo, link: '#' },
    { id: 4, name: 'Porsche Placeholder 4', logo: porscheLogo, link: '#' },
    { id: 5, name: 'Porsche Placeholder 5', logo: porscheLogo, link: '#' },
    { id: 6, name: 'Porsche Placeholder 6', logo: porscheLogo, link: '#' },
  ]

  return (
      <main className="absolute top-0">
        <div className="relative flex justify-center items-center h-screen text-center font-sans font-medium text-white overflow-hidden">
          <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-10 filter brightness-[0.4]">
            <source src={heroBackgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-20">
            <img src={heroLogo} alt="VolunteerGG" />
            <h1 className="font-medium text-white">Volunteer.gg</h1>
            <p className="font-light text-white">A competitive volunteer matching platform</p>
          </div>
        </div>

        <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: 'url(../assets/sdgBackground.png)' }}>
            <div className="flex flex-col justify-center items-center text-center font-inter font-medium w-3/5 gap-5">
                <h1 className="font-medium text-white">SUSTAINABLE DEVELOPMENT GOALS</h1>
                <a href="https://sdgs.un.org/goals/goal17" target="_blank">
                    <img 
                        src={sdgLogo} 
                        alt="SDG Logo" 
                        className="transform transition-transform duration-300 ease-in-out hover:scale-105" 
                    />
                </a>
                <h2 className="font-light text-white">SDG 17: Partnerships for the goal</h2>
                <p className="font-thin text-white">
                    SDG 17, “Partnerships for the Goals,” calls for cross-sector collaboration—uniting governments, NGOs, businesses, academia, and individuals. Volunteer.gg advances this by matching organizations and volunteers via smart filters (location, interests, activity), sharing impact data and reviews for transparency, and using multi-level leaderboards and gamified achievements to motivate participation and peer mentoring. Our ad, premium, and event-fee revenue sustains the platform and funds tools and workshops that strengthen these partnerships, driving progress on SDG 17.
                </p>
            </div>
        </div>

        <div className="w-full p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div
                    style={{ backgroundImage: `url(${AboutUsFeatureImg1})` }}
                    className="flex flex-col justify-center items-center p-5 h-[50vh] bg-cover bg-center bg-no-repeat transition-transform transform hover:scale-105"
                >
                    <h2 className="font-semibold text-white mb-2">Volunteer Matching</h2>
                    <p className="font-thin text-white">Connect with organizations that match your interests and skills.</p>
                </div>

                <div
                    style={{ backgroundImage: `url(${AboutUsFeatureImg2})` }}
                    className="flex flex-col justify-center items-center p-5 h-[50vh] bg-cover bg-center bg-no-repeat transition-transform transform hover:scale-105"
                >
                    <h2 className="font-semibold text-white mb-2">Impact Tracking</h2>
                    <p className="font-thin text-white">Track your volunteer hours and impact on the community.</p>
                </div>

                <div
                    style={{ backgroundImage: `url(${AboutUsFeatureImg3})` }}
                    className="flex flex-col justify-center items-center p-5 h-[50vh] bg-cover bg-center bg-no-repeat transition-transform transform hover:scale-105"
                >
                    <h2 className="font-semibold text-white mb-2">Gamification</h2>
                    <p className="font-thin text-white">Earn badges and rewards for your volunteer efforts.</p>
                </div>

                <div
                    style={{ backgroundImage: `url(${AboutUsFeatureImg4})` }}
                    className="flex flex-col justify-center items-center p-5 h-[50vh] bg-cover bg-center bg-no-repeat transition-transform transform hover:scale-105"
                >
                    <h2 className="font-semibold text-white mb-2">Community Engagement</h2>
                    <p className="font-thin text-white">Join a community of like-minded volunteers and organizations.</p>
                </div>
            </div>
        </div>

        <section className="relative flex justify-center items-center flex-col py-20 text-center font-inter h-screen overflow-hidden">
          <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-10 filter brightness-40">
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-20 w-full flex flex-col items-center justify-center">
            <h2 className="text-white text-2xl font-semibold mb-10 tracking-wider uppercase">OUR AFFILIATE ORGANIZATIONS</h2>
            <div className="w-full px-5 max-w-6xl">\
              {affiliates.map(affiliate => (
                  <div key={affiliate.id} className="flex flex-col items-center justify-center p-4">
                    <a href={affiliate.link} target="_blank" rel="noopener noreferrer" className="inline-block mb-2">
                      <img src={affiliate.logo} alt={affiliate.name} className="w-32 h-auto max-w-full transition-transform duration-300 ease-in-out hover:scale-105" />
                    </a>
                    <p className="text-gray-400 text-xs uppercase mt-2">PLACEHOLDER</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

      </main>
        //   <AboutUsHero />
        //   <AboutUsSDG />
        //   <AboutUsFeatures />
          // <AffiliatesCarousel />
        // </main>
  )
}