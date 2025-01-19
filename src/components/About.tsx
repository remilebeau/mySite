import Image from "next/image";
import osu from "/public/images/osu.svg";

export default function About() {
  return (
    <article id="about" className="flex scroll-mt-32 flex-col gap-4">
      <div className="flex flex-col gap-4">
        <p>
          A properly designed, developed, and managed website is a salesman who
          never sleeps, not merely a business card. This is only possible with a
          custom website.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p>A custom website, compared to a page builder or WordPress, will:</p>
        <ul>
          <li>Look the way it should</li>
          <li>Load faster</li>
          <li>Have a higher conversion rate</li>
          <li>Rank better on Google</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <p>I am:</p>
        <ul>
          <li>Based in the US</li>
          <li>Committed to the long-term success of your business</li>
          <li>
            Experienced in both the tactical and strategic aspects of business
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <Image
          className="mx-auto"
          src={osu}
          alt="Ohio State University"
          width={200}
          height={200}
        />
        <div className="flex flex-col text-xl">
          <p className="text-red-600 sm:text-2xl">
            BSBA: Finance Specialization
          </p>
          <p className="text-red-600 sm:text-2xl">Summa Cum Laude</p>
          <p className="text-red-600 sm:text-2xl">The Ohio State University</p>
        </div>
      </div>

      <div className="flex flex-col justify-evenly text-center text-xl sm:flex-row sm:text-left">
        <ul className="flex flex-col text-gray-400">
          <li>Accounting</li>
          <li>Business Analytics</li>
          <li>Corporate Finance</li>
          <li>Entrepeneurial Finance</li>
          <li>Financial Analysis</li>
        </ul>
        <ul className="flex flex-col text-gray-400">
          <li>Marketing Management</li>
          <li>Operations Management</li>
          <li>Organizational Behavior</li>
          <li>Risk Management</li>
          <li>Strategic Management</li>
        </ul>
      </div>
    </article>
  );
}
