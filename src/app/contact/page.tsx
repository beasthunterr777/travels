// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // For now, this will just simulate a submission
  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    console.log('Contact form submitted:', data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    form.reset();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg max-w-2xl mx-auto overflow-hidden">
        <div className="relative h-56 w-full">
            <Image
                src="data:image/jpeg;base64,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
"
                alt="Contact us image"
                data-ai-hint="contact banner"
                layout="fill"
                objectFit="cover"
                quality={85}
            />
            {/* Subtle gradient overlay for a hint of depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 pointer-events-none"></div>
            {/* Text Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 flex justify-center items-center">
              <h2 className="text-3xl font-bold text-white text-center drop-shadow-md">Contact Us</h2>
            </div>
        </div>
        <CardHeader className="text-center pt-6">
          <Mail className="mx-auto h-12 w-12 text-primary mb-2" />
          <CardTitle className="text-3xl font-bold text-primary">Contact Us</CardTitle>
          <CardDescription className="text-muted-foreground">
            Have questions or feedback? We'd love to hear from you!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
