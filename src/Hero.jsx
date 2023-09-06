import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
         <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam praesentium deleniti pariatur eum iusto modi rerum consectetur consequatur autem sequi, velit eaque recusandae libero quos? Hic temporibus eius aperiam!</p>
         </div>
         <div className="img-container">
            <img src={heroImg} alt="woman and the browser" />
         </div>
      </div>
    </section>
  )
}
export default Hero