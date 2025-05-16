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
                src="data:image/jpeg;base64,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/t/h+gB7Q/1Gf9v8P04PaH+qz/t/h+gD2hH/ADZ/2/w/Rx7Qf1Of9v8AD9AHtB/UZ/2/w/Rx7Qf1Gf8Ab/D9AHtB/UZ/2/w/SlPaD+oz/t/h+gB7Qf1Gf9v8P0oe0H9Rn/b/AA/QB7Qf1Gf9v8P0oe0H9Rn/AG/w/QB7Qf1Gf9v8P0v8Q/1Gf9v8P0Ae0H9Rn/b/AA/S/wAQ/wBRn/b/AA/QB7Qf1Gf9v8P0oe0H9Rn/AG/w/QB7Qf1Gf9v8P0v8Q/1Gf9v8P0Ae0H9Rn/b/AA/R/xD/UZ/2/wAP0Ae0H9Rn/b/D9H/EP9Rn/b/D9AHtB/UZ/2/wAP0f8AEP8AUZ/2/wAP0Ae0H9Rn/b/D9L/EP9Rn/b/D9AHtB/UZ/2/wAP0v8AEP8AUZ/2/wAP0Ae0H9Rn/b/D9L/EP9Rn/b/D9AHtB/UZ/2/wAP0v8AEP8AUZ/2/wAP0Ae0H9Rn/b/D9L/EP9Rn/b/D9AHtB/UZ/2/wAP0oe0H9Rn/b/D9AHtB/UZ/2/wAP0oe0H9Rn/b/D9AHtB/UZ/2/wAP0oe0H9Rn/b/D9AHtB/UZ/2/wAP0oe0H9Rn/b/D9AHtB/UZ/2/wAP0f8AEP8AUZ/2/wAP0Ae0H9Rn/b/D9L/EP9Rn/b/D9AHtB/UZ/2/wAP0v8AEP8AUZ/2/wAP0Ae0H9Rn/b/D9oe0H9Rn/AG/w/QB7Qf1Gf9v8P0f8Q/1Gf9v8P0Af//Z"
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
          {/* This title can be removed or kept based on preference, since "Contact Us" is now on the image */}
          {/* <CardTitle className="text-3xl font-bold text-primary">Contact Us</CardTitle> */}
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
                      <Input placeholder="Your Name" {...field} suppressHydrationWarning/>
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
                      <Input type="email" placeholder="your.email@example.com" {...field} suppressHydrationWarning/>
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
              <Button type="submit" className="w-full" disabled={isLoading} suppressHydrationWarning>
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
