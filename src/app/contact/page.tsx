// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
            src="data:image/jpeg;base64,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"
            alt="Contact Us Banner"
            data-ai-hint="office contact"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
            <h2 className="text-3xl font-bold text-white drop-shadow-md">Contact Us</h2>
          </div>
        </div>
        <CardHeader className="text-center pt-6">
          <CardDescription className="text-muted-foreground">
            We'd love to hear from you! Send us a message using the form below.
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
                      <Input placeholder="Your Name" {...field} suppressHydrationWarning />
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
                      <Input type="email" placeholder="your.email@example.com" {...field} suppressHydrationWarning />
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
                      <Textarea placeholder="Your message here..." rows={5} {...field} />
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
