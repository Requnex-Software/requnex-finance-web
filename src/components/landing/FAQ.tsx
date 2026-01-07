import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is the app completely free?",
      answer: "Yes! Requnex Finance is 100% free to download and use. There are no hidden fees, no premium tiers, and no in-app purchases. All features are available to everyone.",
    },
    {
      question: "How do you make money if it's free?",
      answer: "We believe everyone deserves access to great financial tools. The app is developed as a passion project by Requnex Software. In the future, we may introduce optional premium features, but the core functionality will always remain free.",
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. Your data is encrypted locally on your device using industry-standard encryption. We don't have access to your financial information – it never leaves your phone. You can also protect the app with a PIN or biometric authentication.",
    },
    {
      question: "What currencies are supported?",
      answer: "We support over 40 world currencies including USD, EUR, UAH, GBP, PLN, and many more. We also track 10 popular cryptocurrencies including Bitcoin, Ethereum, and USDT. Exchange rates are updated daily from the National Bank of Ukraine.",
    },
    {
      question: "How do I backup my data?",
      answer: "Currently, data is stored locally on your device. We're working on cloud backup and sync features for a future update. In the meantime, make sure to keep your phone backed up through your system's backup service.",
    },
    {
      question: "Will there be an iOS version?",
      answer: "Yes! We're actively working on the iOS version and plan to release it in Q2 2026. Sign up for our newsletter to be notified when it's available.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you can't find what you're looking for, 
            feel free to reach out to us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
