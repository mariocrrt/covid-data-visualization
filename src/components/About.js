export function About() {
    return (
        <div className="row pt-5">
            <div className="text-center mt-4 py-5">
                <h1 className="title">It's Okay to be Lazy</h1>
                <h5 className="text-secondary sub">
                    Automating our lives, one step at a time...
                </h5>
            </div>

            <div className="image-div-about-1"></div>
            <div className="about-div col-md-8 offset-md-2 py-3">
                <h2 className="pt-4">My Fascination with Automation</h2>
                <p className="pt-2 pb-3">
                    There are two things that always fascinated me: automating
                    things, and data. Since the start of the COVID pandemic, I
                    developed a strong interest in monitoring the evolution of
                    positivity rates all around the world. <br />
                    As my data monitoring expertise grew, I found{" "}
                    <a
                        className="about-links"
                        target="_blank"
                        rel="noreferrer"
                        href="https://lab24.ilsole24ore.com/"
                    >
                        this website
                    </a>
                    , which does a great job at visualizing all kinds of
                    COVID-related data, and I developed the habit of checking it
                    once a day, roughly at the time at which they publish their
                    data.
                    <br />
                    However, the task of having to open the website everyday,
                    looking for the data I needed, plus the endless scrolling,
                    became incredibly tedious and repetitive after a while.{" "}
                    <br />
                    And that's when I decided to automate my routine by creating{" "}
                    <a
                        className="about-links"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/mariocrrt/COVID_Tracker"
                    >
                        this project
                    </a>
                    . <br />
                    Initially I only built a Telegram bot, in order to
                    automatically recieve the daily data updates on my mobile
                    phone. But, being a Fullstack Developer at heart, I couldn't
                    help myself and I had to utilize the data I scraped to
                    create a website for data visualization. <br />
                    And here we are. Welcome!
                </p>
                <h2>Toolbox</h2>
                <p style={{ fontWeight: "bold" }} className="pt-2">
                    Frontend
                </p>
                <ul>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>

                <p style={{ fontWeight: "bold" }} className="pt-2">
                    Backend
                </p>
                <ul>
                    <li>Flask</li>
                    <li>PostgreSQL</li>
                </ul>

                <p style={{ fontWeight: "bold" }} className="pt-2">
                    CI/CD
                </p>
                <ul>
                    <li>Heroku</li>
                </ul>

                <p style={{ fontWeight: "bold" }} className="pt-2">
                    Automation
                </p>
                <ul>
                    <li>Firebase</li>
                </ul>
            </div>
        </div>
    );
}
