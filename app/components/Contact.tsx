"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { toast } from "sonner";
import Image from "next/image";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    message: "",
    verification: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.verification !== "black") {
      toast.error("Please answer the verification question correctly");
      return;
    }

    try {
      console.log('🚀 Submitting contact form...');
      const requestData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        reason: formData.reason,
        message: formData.message,
        verification: formData.verification,
      };
      console.log('📤 Request data:', requestData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response ok:', response.ok);

      const responseData = await response.json();
      console.log('📥 Response data:', responseData);

      if (response.ok) {
        console.log('✅ Form submitted successfully');
        toast.success("Thank you! Your enquiry has been submitted successfully.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          reason: "",
          message: "",
          verification: "",
        });
      } else {
        console.error('❌ Form submission failed');
        console.error('❌ Error details:', responseData);
        toast.error(`Failed to submit enquiry: ${responseData.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="relative" style={{ background: 'linear-gradient(to bottom, #5bbaf1 0%, #06376e 100%)' }}>       

        <section id="contact" className="py-12 sm:py-16 md:py-20 pt-2">
          <div className="container mx-auto px-2 sm:px-4">
            {/* Promotional Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 px-4">
                AQUA-CAMPA HOLIDAYS LIMITED IS TAKING PRE-ORDER INTEREST TO BE ABLE 
                TO OFFER BEST PRICE FOR THIS UNIQUE OPPORTUNITY.
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Left Side - Call to Action */}
              <div className="flex flex-col justify-center items-center text-center bg-blue-800/30 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
                <div className="w-32 h-32 sm:w-64 sm:h-64 mb-6 flex items-center justify-center">
                  <Image 
                    src="/assets/handshake.svg" 
                    alt="Handshake" 
                    width={256}
                    height={256}
                    className="w-full h-full brightness-0 invert"
                  />
                </div>
                <div className="text-white">
                  <p className="text-lg sm:text-xl mb-4">
                    If you are situated near a suitable operational location anywhere in NZ and would like to be part of this exciting venture,
                  </p>
                  <p className="text-xl sm:text-2xl font-bold">
                    REGISTER YOUR INTEREST NOW!
                  </p>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="max-w-2xl">
              <Card className="p-4 sm:p-6 md:p-8 shadow-medium">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-6 sm:mb-8">Contact</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="reason" className="text-foreground">
                      Reason for Enquiry
                    </Label>
                    <Select required value={formData.reason} onValueChange={(value) => setFormData({ ...formData, reason: value })}>
                      <SelectTrigger className="bg-background border-input">
                        <SelectValue placeholder="- Select -" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="preorder">Pre-Order an Aqua-Campa</SelectItem>
                        <SelectItem value="collaboration">Business Collaboration</SelectItem>
                        <SelectItem value="general">General Enquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-input min-h-32"
                    />
                  </div>

                  <div>
                    <Label className="text-foreground mb-3 block">
                      Human Verification - A Panda is white and ..... ?
                    </Label>
                    <RadioGroup
                      required
                      value={formData.verification}
                      onValueChange={(value) => setFormData({ ...formData, verification: value })}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="green" id="green" />
                        <Label htmlFor="green" className="text-foreground cursor-pointer">
                          Green
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="black" id="black" />
                        <Label htmlFor="black" className="text-foreground cursor-pointer">
                          Black
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yellow" id="yellow" />
                        <Label htmlFor="yellow" className="text-foreground cursor-pointer">
                          Yellow
                        </Label>
                      </div>
                    </RadioGroup>
                    <p className="text-sm text-muted-foreground mt-2">Answer this question correctly to enable the Submit button.</p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/80 text-primary-foreground transition-all duration-300"
                    disabled={formData.verification !== "black"}
                  >
                    Submit
                  </Button>
                </form>
              </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
