import { Button } from "@/components/Button";
import { TextLink } from "@/components/TextLink";
import { PhotoSlot } from "@/components/PhotoSlot";
import { EmailSignupForm } from "@/components/EmailSignupForm";

const heading = "heading-type font-medium text-forest-ink";
const eyebrow = "text-base font-semibold uppercase tracking-widest";

// Two shared text measures — every paragraph maps onto one of these.
const measureIntro = "max-w-2xl"; // 672px — section intro paragraphs
const measureBody = "max-w-md"; // 448px — supporting/list body copy

const walkCards = [
  {
    date: "PLACEHOLDER — Date 1",
    location: "PLACEHOLDER — Location",
    time: "PLACEHOLDER — Time",
    price: "PLACEHOLDER — Price",
  },
  {
    date: "PLACEHOLDER — Date 2",
    location: "PLACEHOLDER — Location",
    time: "PLACEHOLDER — Time",
    price: "PLACEHOLDER — Price",
  },
  {
    date: "PLACEHOLDER — Date 3",
    location: "PLACEHOLDER — Location",
    time: "PLACEHOLDER — Time",
    price: "PLACEHOLDER — Price",
  },
];

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="bg-lichen">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className={`${eyebrow} text-loam`}>GO OUTSIDE · GO WITHIN</p>
            <h1 className={`${heading} mt-4 text-4xl leading-tight sm:text-5xl`}>
              The forest is already working. We slow down enough to notice.
            </h1>
            <p className={`mt-6 ${measureIntro} text-lg text-forest-ink`}>
              Two hours. Half a mile. A tea ceremony among the trees.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#dates">Upcoming dates</Button>
              <Button href="#what-a-walk-is" variant="secondary">
                What to expect
              </Button>
            </div>
          </div>
          <PhotoSlot
            aspect="aspect-[4/5]"
            name="Hero forest photograph"
            className="w-full"
          />
        </div>
      </section>

      {/* 2. What a walk is */}
      <section id="what-a-walk-is" className="bg-birch">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className={`${eyebrow} text-loam`}>WHAT A WALK IS</p>
          <h2 className={`${heading} mt-4 text-4xl sm:text-5xl`}>
            Two hours, half a mile, and a cup of tea.
          </h2>
          <p className={`mt-6 ${measureIntro} text-lg text-forest-ink`}>
            Most people hear guided walk and picture a hike. This is the
            opposite of a hike.
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {[
              {
                title: "We gather",
                body: "A small group, never more than ten, meeting at the trailhead.",
              },
              {
                title: "We walk slowly",
                body: "Simple invitations to notice what is around you, and what is happening inside you. There is no distance to cover and nowhere to be.",
              },
              {
                title: "We sit for tea",
                body: "A tea ceremony in a circle among the trees before we part.",
              },
            ].map((step, i) => (
              <div key={step.title} className="flex gap-6">
                <span
                  className={`${heading} text-2xl text-loam`}
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className={`${heading} text-xl`}>{step.title}</h3>
                  <p className={`mt-2 ${measureBody} text-lg text-forest-ink`}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Upcoming dates */}
      <section id="dates" className="bg-lichen">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className={`${eyebrow} text-loam`}>UPCOMING</p>
          <h2 className={`${heading} mt-4 text-4xl sm:text-5xl`}>
            The next few Saturdays.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {walkCards.map((card) => (
              <div
                key={card.date}
                className="overflow-hidden rounded-lg bg-birch"
              >
                <PhotoSlot aspect="aspect-square" name="Walk card photograph" />
                <div className="p-6">
                  <h3 className={`${heading} text-lg`}>{card.date}</h3>
                  <p className="mt-2 text-base text-forest-ink">
                    {card.location}
                  </p>
                  <p className="mt-1 text-base text-forest-ink">{card.time}</p>
                  <p className="mt-1 text-base text-forest-ink">{card.price}</p>
                </div>
              </div>
            ))}
          </div>

          <TextLink href="/dates" className="mt-10 inline-block">
            See all dates
          </TextLink>
        </div>
      </section>

      {/* 4. Meet the guide */}
      <section id="guide" className="bg-birch">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-start md:py-24">
          <PhotoSlot
            aspect="aspect-[4/5]"
            name="Portrait of the guide, Terry"
            className="w-full md:max-w-md"
          />
          <div>
            <p className={`${eyebrow} text-loam`}>YOUR GUIDE</p>
            <h2 className={`${heading} mt-4 text-3xl sm:text-4xl`}>
              Meet Terry
            </h2>
            <p
              className={`mt-6 ${measureBody} rounded-md border border-dashed border-loam bg-lichen/40 p-4 text-lg text-forest-ink`}
            >
              PLACEHOLDER — two to three sentences introducing Terry will go
              here.
            </p>
            <TextLink href="/about" className="mt-8 inline-block">
              Read her story
            </TextLink>
          </div>
        </div>
      </section>

      {/* 5. Why it works */}
      <section id="why-it-works" className="bg-deep-moss">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className={`${eyebrow} text-birch`}>WHY IT WORKS</p>
          <h2 className="mt-4 heading-type text-3xl font-medium text-birch sm:text-4xl">
            Forest bathing, in plain terms.
          </h2>
          <p className={`mt-6 ${measureIntro} text-lg text-birch`}>
            Forest bathing, or shinrin-yoku, began in Japan in 1982 as a
            public health answer to everyday stress. It is not exercise and
            it is not a hike. It is taking the forest in through your
            senses. Research since has linked time among trees to lower
            blood pressure, reduced stress hormones and better sleep.
          </p>
          <Button href="/about" variant="primary-inverted" className="mt-8">
            More about the practice
          </Button>
        </div>
      </section>

      {/* 6. Bedrock Babes */}
      <section id="bedrock-babes" className="bg-birch">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-40">
          <p className={`${eyebrow} text-loam`}>
            FOR CANCER PATIENTS AND CAREGIVERS
          </p>
          <h2 className={`${heading} mt-4 text-3xl sm:text-4xl`}>
            Bedrock Babes
          </h2>
          <p className={`mx-auto mt-6 ${measureIntro} text-lg text-forest-ink`}>
            Walks for people living with cancer, and for the people caring
            for them. Same pace, same tea, a smaller circle.
          </p>
          <PhotoSlot
            aspect="aspect-[3/2]"
            name="Bedrock Babes photograph"
            className={`mx-auto mt-10 ${measureIntro}`}
          />
          <TextLink href="/bedrock-babes" className="mt-10 inline-block">
            About Bedrock Babes
          </TextLink>
        </div>
      </section>

      {/* 7. Corporate */}
      <section id="corporate" className="bg-birch">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="rounded-lg bg-loam p-8 md:p-12">
            <p className={`${eyebrow} text-birch`}>FOR TEAMS</p>
            <h2 className="mt-4 heading-type text-3xl font-medium text-birch sm:text-4xl">
              Winter sessions over Zoom
            </h2>
            <p className={`mt-6 ${measureIntro} text-lg text-birch`}>
              A talk on the health benefits of time in nature, open to
              anyone at your organization. Guided walks for teams are
              available in season.
            </p>
            <Button
              href="/corporate"
              variant="primary-inverted"
              className="mt-8"
            >
              Enquire
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Email signup */}
      <section id="signup" className="bg-lichen">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className={`${eyebrow} text-loam text-center`}>
            TWO HOURS · HALF A MILE · NEVER MORE THAN TEN · TEA AT THE END
          </p>
          <div className="mx-auto mt-8 max-w-[656px] rounded-lg bg-birch p-8 text-center md:p-12">
            <h2 className={`${heading} text-3xl sm:text-4xl`}>
              Hear about new walks first
            </h2>
            <div className="mt-8">
              <EmailSignupForm />
            </div>
            <p className="mt-4 text-base text-loam">
              A short note when new dates are posted. Nothing else.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
