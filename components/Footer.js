import Image from 'next/image'

export default function Footer() {
  return (
    <footer tw="bg-primary p-6 space-y-8 lg:(grid grid-cols-4 gap-x-10 px-48)">
      <div tw="lg:mt-4">
        <Image
          src="/images/logo.svg"
          alt="Budget law logo"
          width="200"
          height="80"
          objectFit="contain"
        />
      </div>
      <div>
        <h3 tw="font-serif text-lg text-white text-opacity-75 mb-3">
          For Business
        </h3>
        <ul tw="text-white text-xs text-opacity-60 pr-10 leading-normal">
          <li>Staff engagement &amp; Disengagement Contracts</li>
          <li>Commercial Litigation & Dispute Resolution</li>
          <li>Professional Negligence</li>
          <li>Settlement agreements &amp; Mediation</li>
          <li>Other Complex Damages Based Business Litigation</li>
        </ul>
      </div>
      <div>
        <h3 tw="font-serif text-lg text-white text-opacity-75 mb-3">
          For Personal
        </h3>
        <ul tw="text-white text-xs text-opacity-60 pr-10 leading-normal">
          <li>Professional, Medical &amp; Clinical Negligence</li>
          <li>Property disputes, lease extension</li>
          <li>Serious Personal Injury</li>
          <li>Other Complex Damages Based Personal Litigation</li>
        </ul>
      </div>
      <div tw="font-serif text-accent text-xl">
        <a href="tel:+2347049493845">+234 704 949 3845</a>
        <br />
        <a href="mailto:hello@bugdetlaw.com.ng">hello@bugdetlaw.com.ng</a>
      </div>
      <div tw="lg:col-span-full">
        <hr tw="border-white border-opacity-25" />
        <p tw="text-white text-opacity-60 text-xs">
          Copyright &copy; 2021 Budget Law Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
