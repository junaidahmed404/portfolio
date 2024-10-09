import "./BlogSection.css";

function BlogSection() {
  return (
    <section id="blog" className="section">
      <h1 className="colorChangeHeading">Blogosphere</h1>
      <div className="blogsByMe border">
        <p>
          Beyond coding, I&apos;m also a storyteller at heart. I pour my
          thoughts and insights into engaging blog posts where I share tips,
          tricks, and musings on the ever-evolving landscape of web development.
          Whether you&apos;re a fellow developer seeking inspiration or a
          curious soul eager to learn, my blog is a treasure trove waiting to be
          explored.
          <br />
          &quot;click below To visit Blog Section&quot;
        </p>
        <button className="btn--primary btn btnBtn boxShadow">
          Dive into the Blogosphere
        </button>
      </div>
    </section>
  );
}

export default BlogSection;
