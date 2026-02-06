import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ_ITEMS = [
  {
    question: "How accurate is the 2026 forecast?",
    answer:
      "Our AI models utilize current market velocity and historical trends with a 94% accuracy rate. We continuously refine our algorithms with the latest transaction data to maintain industry-leading precision.",
  },
  {
    question: "Is my data sold to third parties?",
    answer:
      "Never. Your privacy is our priority; your data stays with Nexus. We use bank-level encryption and strict data governance policies to ensure your information is protected at all times.",
  },
  {
    question: "Is there an obligation to list?",
    answer:
      "None. This is a free tool for our community to make informed decisions. Whether you decide to list with us or simply use the forecast for planning, there is zero obligation.",
  },
  {
    question: "Do you work with buyers?",
    answer:
      "Yes, we use the same data to ensure you don't overpay in an appreciating market. Our buyer advisory service provides real-time valuations and negotiation insights for every offer you make.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          FAQ
        </p>
        <h2 className="mb-10 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Common Questions.
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
