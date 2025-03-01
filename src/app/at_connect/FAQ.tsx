import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const FAQ = () => {
  const faqItems: FAQItem[] = [
    {
      question: "Is it a fair? Is it a competition? Is it both? ",
      answer: "It is both! Similar to a science fair judges will walk through and rank the projects based on three categories."
    },
    {
      question: "Who is going to compete? Do high school students with co-designers compete? Do companies willing to have a booth compete? Are they both competing? Do Cre[AT]e teams compete too?",
      answer: "Any student developer will compete in the fair. They do not have to be high school students. Students of any age can compete and they are not required to have a co-designer. Companies are given a booth to display their technology, they are not part of the competition."
    },
    {
      question: "If students are competing, what do the companies with booths do? Are they giving out examples? Are they part of the judging? Basically, what is the role of the companies (the ones who are not sponsoring or judging but have booths) in this event?",
      answer: "The companies are just showcasing their technologies to the participants of the fair. They are sharing assistive technology with anyone who might be interested."
    },
    {
      question: "What should be the rubric for judging? Yes, we know there are categories and there will be a winner, but how could we objectively award such? Is it going to be a voting system? Is one person making the decision?",
      answer: "We have three categories: Product Feasibility, Technical Innovation, and Presentation. There will be multiple judges and we will implement a rubric for each category. This means there will be a voting system."
    },
    {
      question: "What do the co-designers do at the event? Do they act as the example “showcaser”?",
      answer: "Co-designers do not need to act as co-designer for the event. The goal is for each group to have an interactive activity for the fair-goers. The fair-goers will be the “showcaser”. They get to have a personal experience with the product. "
    },
    {
      question: "How will the event benefit those with disabilities? Benefit the parents?",
      answer: "This fair will expose new technologies for those with disabilities. Each booth will feature fun, interactive activities that engage students with disabilities. This fair will benefit parents because they will be able to see new technologies. It could also raise awareness among parents who don’t know or are close to someone with a disability."
    },
    {
      question: "How will this event differ from other student-led TJ events like HackTJ or Techstravaganza?",
      answer: "The difference is that we’re focused on Assistive Technology and implementing a competition. The judging criteria are also different. The goal is to make the projects interactive. The project will be judged on technical innovation and how it interacts with the students at the fair."
    },
    {
      question: "What is the purpose of the fair aspect? What is the purpose of the competition aspect? Does the form of a fair-competition hybrid align well with the purpose of the event?",
      answer: "The primary purpose is to help introduce assistive technology and spread awareness for it. Make assistive technology more accessible to the public. The fair is there because we want to make it easy for us to showcase both students and the company’s technology. The competition is there to motivate the students to work as hard as they can on the technology. It’s an incentive to have more student groups want to make assistive technology. We will reduce confusion but stating that the fair is a fun interactive version of a STEM fair."
    },
    {
      question: "How do we envision this event to become a long-term TJ tradition?",
      answer: "With time we can gain more prominence. The event conditions itself have to be fun. We can get TJHSST volunteers to come and get service hours. The next few upcoming officers will continue the event. The TJHSST Assistive Technology club (ATC) will be more integrated with the event."
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Frequently Asked Questions (FAQ)</h1>
      <div className="w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-md bg-white p-6">
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={`item-${index}`} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-md bg-neutral-100 font-medium text-gray-900 py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-md pt-2 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;