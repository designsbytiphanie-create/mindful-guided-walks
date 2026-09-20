import Image from "next/image";
import { Button } from "@/components/Button";
import { TextLink } from "@/components/TextLink";
import { PhotoSlot } from "@/components/PhotoSlot";
import { EmailSignupForm } from "@/components/EmailSignupForm";

const heading = "heading-type font-medium text-forest-ink";
const eyebrow = "text-base font-medium uppercase tracking-widest";

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
      <section className="relative flex max-h-[88vh] flex-col overflow-hidden bg-deep-moss md:max-h-none md:min-h-[max(640px,min(78vh,780px))] md:flex-row md:items-center">
        <div className="relative h-[33vh] w-full flex-shrink-0 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[55%]">
          <Image
            src="/images/hero-forest.jpg"
            alt="Sunbeams filtering through tall forest trees onto a dirt path"
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover object-[50%_75%] saturate-[.85]"
            priority
          />
        </div>
        <div className="relative flex min-h-0 flex-1 flex-col justify-center px-6 py-4 md:flex-none md:w-[45%] md:px-12 md:py-24 lg:px-16">
          <p className={`${eyebrow} text-lichen`}>GO OUTSIDE · GO WITHIN</p>
          <h1 className="heading-type mt-2 text-4xl font-medium leading-tight text-birch sm:text-5xl md:mt-4">
            The forest is already working. We slow down enough to notice.
          </h1>
          <p className={`mt-3 ${measureIntro} text-lg text-birch md:mt-6`}>
            Two hours. Half a mile. A tea ceremony among the trees.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-8 md:gap-4">
            <Button href="#dates" variant="primary-inverted">
              Upcoming dates
            </Button>
            <Button href="#what-a-walk-is" variant="secondary-inverted">
              What to expect
            </Button>
          </div>
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

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "We gather",
                body: "A small group meeting at the trailhead.",
              },
              {
                title: "We walk slowly",
                body: "Simple invitations to notice what is around you, and what is happening inside you. The walking is slow on purpose. Nobody is counting steps or checking the time.",
              },
              {
                title: "We sit for tea",
                body: "A tea ceremony in a circle among the trees before we part.",
              },
            ].map((step, i) => (
              <div key={step.title}>
                <PhotoSlot
                  aspect="aspect-[4/5]"
                  name={`${step.title} — placeholder photograph`}
                  background="birch"
                />
                <span
                  className="heading-type mt-4 block text-[64px] font-medium leading-none text-lichen"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <h3 className={`${heading} mt-2 text-xl`}>{step.title}</h3>
                <p className={`mt-2 ${measureBody} text-lg text-forest-ink`}>
                  {step.body}
                </p>
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
                <PhotoSlot
                  aspect="aspect-square"
                  name="Walk card photograph"
                  background="lichen"
                />
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
            background="birch"
            label="Portrait to come"
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
          <p className={`${eyebrow} text-lichen`}>WHY IT WORKS</p>
          <h2 className="mt-4 heading-type text-3xl font-medium text-birch sm:text-4xl">
            Forest bathing, in plain terms.
          </h2>
          <p className={`mt-6 ${measureIntro} text-lg text-birch`}>
            Forest bathing, or shinrin-yoku, began in Japan in 1982 as a
            public health answer to everyday stress. It is not exercise and
            it is not a hike. It is taking the forest in through your
            senses.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Lower blood pressure",
                body: "Studies in Japan have measured drops in blood pressure and heart rate after time spent among trees.",
              },
              {
                title: "Less stress hormone",
                body: "Research has linked forest walks to reduced cortisol, the body's main stress hormone.",
              },
              {
                title: "Better sleep",
                body: "Participants in several studies reported sleeping longer and more deeply afterwards.",
              },
            ].map((finding) => (
              <div key={finding.title}>
                <h3 className="heading-type text-xl font-medium text-birch">
                  {finding.title}
                </h3>
                <p className="mt-2 text-lg text-lichen">{finding.body}</p>
              </div>
            ))}
          </div>

          <Button href="/about" variant="primary-inverted" className="mt-10">
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
            background="birch"
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
            <p className={`${eyebrow} text-lichen`}>FOR TEAMS</p>
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
            TWO HOURS · HALF A MILE · SMALL GROUPS · TEA AT THE END
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
