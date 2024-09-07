"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronsUpDown, ExternalLink, WandSparkles } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Option } from "@prisma/client";

import { useProModal } from "@/app/hooks/useProModal";

import Heading from "../HeroHeading";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import ImageUpload from "../inputs/ImageUpload";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "../ui/checkbox";
import { SafeUser } from "@/types";
import Link from "next/link";

interface OptionsComponentProps {
  options: Option | null;
  isPro: boolean;
  currentUser: SafeUser | null;
}

const OptionsComponent: React.FC<OptionsComponentProps> = ({
  options,
  isPro,
  currentUser,
}) => {
  const router = useRouter();
  const proModal = useProModal();
  const [isLoading, setIsLoading] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const [navbar, setNavbar] = useState(false);
  const [hero, setHero] = useState(false);
  const [project, setProject] = useState(false);
  const [footer, setFooter] = useState(false);

  // Components Form
  const formSchema = z.object({
    navbar: z.boolean(),
    navbarLogoText: z.string(),
    navbarLinkText1: z.string(),
    navbarLink1: z.string(),
    navbarLinkText2: z.string(),
    navbarLink2: z.string(),
    navbarLinkText3: z.string(),
    navbarLink3: z.string(),
    resumeText: z.string(),
    resumeLink: z.string(),
    hero: z.boolean(),
    heroTagText: z.string(),
    heroPrimaryButtonText: z.string(),
    heroPrimaryButtonLink: z.string(),
    heroSecondaryButtonText: z.string(),
    heroSecondaryButtonLink: z.string(),
    heroText: z.string(),
    heroDescriptionText: z.string(),
    heroImage: z.string(),
    project: z.boolean(),
    projectSectionTagText: z.string(),
    projectSectionHeading: z.string(),
    projectSectionBodyText: z.string(),
    projectText1: z.string(),
    projectBody1: z.string(),
    projectLink1: z.string(),
    projectImage1: z.string(),
    projectText2: z.string(),
    projectBody2: z.string(),
    projectLink2: z.string(),
    projectImage2: z.string(),
    footer: z.boolean(),
    footerText: z.string(),
    footerBodyText: z.string(),
    footerLinkText1: z.string(),
    footerLink1: z.string(),
    footerLinkText2: z.string(),
    footerLink2: z.string(),
    footerLinkText3: z.string(),
    footerLink3: z.string(),
    footerCopyrightText: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      navbar: options?.navbar!!,
      navbarLogoText: options?.navbarLogoText!!,
      navbarLinkText1: options?.navbarLinkText1!!,
      navbarLink1: options?.navbarLink1!!,
      navbarLinkText2: options?.navbarLinkText2!!,
      navbarLink2: options?.navbarLink2!!,
      navbarLinkText3: options?.navbarLinkText3!!,
      navbarLink3: options?.navbarLink3!!,
      resumeText: options?.resumeText!!,
      resumeLink: options?.resumeLink!!,
      hero: options?.hero!!,
      heroTagText: options?.heroTagText!!,
      heroPrimaryButtonText: options?.heroPrimaryButtonText!!,
      heroPrimaryButtonLink: options?.heroPrimaryButtonLink!!,
      heroSecondaryButtonText: options?.heroSecondaryButtonText!!,
      heroSecondaryButtonLink: options?.heroSecondaryButtonLink!!,
      heroText: options?.heroText!!,
      heroDescriptionText: options?.heroDescriptionText!!,
      heroImage: options?.heroImage!!,
      project: options?.project!!,
      projectSectionTagText: options?.projectSectionTagText!!,
      projectSectionHeading: options?.projectSectionHeading!!,
      projectSectionBodyText: options?.projectSectionBodyText!!,
      projectText1: options?.projectText1!!,
      projectBody1: options?.projectBody1!!,
      projectLink1: options?.projectLink1!!,
      projectImage1: options?.projectImage1!!,
      projectText2: options?.projectText2!!,
      projectBody2: options?.projectBody2!!,
      projectLink2: options?.projectLink2!!,
      projectImage2: options?.projectImage2!!,
      footer: options?.footer!!,
      footerText: options?.footerText!!,
      footerBodyText: options?.footerBodyText!!,
      footerLinkText1: options?.footerLinkText1!!,
      footerLink1: options?.footerLink1!!,
      footerLinkText2: options?.footerLinkText2!!,
      footerLink2: options?.footerLink2!!,
      footerLinkText3: options?.footerLinkText3!!,
      footerLink3: options?.footerLink3!!,
      footerCopyrightText: options?.footerCopyrightText!!,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    axios
      .post("/api/options", values)
      .then(() => {
        router.refresh();
        toast.success("Success!");
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // AI Form
  const onAiSubmit = (values: z.infer<typeof aiFormSchema>) => {
    setIsAiLoading(true);

    axios
      .post("/api/ai", values)
      .then((res) => {
        // if dummy data
        // const options = res.data;

        // if response from ai
        const options = JSON.parse(res.data);

        form.setValue("navbarLogoText", options.navbarLogoText);
        form.setValue("navbarLinkText1", options.navbarLinkText1);
        form.setValue("navbarLink1", options.navbarLink1);
        form.setValue("navbarLinkText2", options.navbarLinkText2);
        form.setValue("navbarLink2", options.navbarLink2);
        form.setValue("navbarLinkText3", options.navbarLinkText3);
        form.setValue("navbarLink3", options.navbarLink3);
        form.setValue("resumeText", options.resumeText);
        form.setValue("resumeLink", options.resumeLink);
        form.setValue("heroTagText", options.heroTagText);
        form.setValue("heroPrimaryButtonText", options.heroPrimaryButtonText);
        form.setValue("heroPrimaryButtonLink", options.heroPrimaryButtonLink);
        form.setValue(
          "heroSecondaryButtonText",
          options.heroSecondaryButtonText
        );
        form.setValue(
          "heroSecondaryButtonLink",
          options.heroSecondaryButtonLink
        );
        form.setValue("heroText", options.heroText);
        form.setValue("heroDescriptionText", options.heroDescriptionText);
        form.setValue("projectSectionTagText", options.projectSectionTagText);
        form.setValue("projectSectionHeading", options.projectSectionHeading);
        form.setValue("projectSectionBodyText", options.projectSectionBodyText);
        form.setValue("projectText1", options.projectText1);
        form.setValue("projectBody1", options.projectBody1);
        form.setValue("projectLink1", options.projectLink1);
        form.setValue("projectText2", options.projectText2);
        form.setValue("projectBody2", options.projectBody2);
        form.setValue("projectLink2", options.projectLink2);
        form.setValue("footerText", options.footerText);
        form.setValue("footerBodyText", options.footerBodyText);
        form.setValue("footerLinkText1", options.footerLinkText1);
        form.setValue("footerLink1", options.footerLink1);
        form.setValue("footerLinkText2", options.footerLinkText2);
        form.setValue("footerLink2", options.footerLink2);
        form.setValue("footerLinkText3", options.footerLinkText3);
        form.setValue("footerLink3", options.footerLink3);
        form.setValue("footerCopyrightText", options.footerCopyrightText);

        toast.success("Success!");
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsAiLoading(false);
      });
  };

  const aiFormSchema = z.object({
    input: z.string(),
  });

  const aiForm = useForm<z.infer<typeof aiFormSchema>>({
    resolver: zodResolver(aiFormSchema),
    defaultValues: {
      input: "",
    },
  });

  return (
    <section className="flex flex-col gap-4">
      <div className="mt-4">
        <Heading title="Options" subtitle="Customize your page" center />
      </div>
      {/* Components Form */}
      <Form {...form}>
        <form className="flex flex-col gap-6">
          {/* Navbar */}
          <Collapsible open={navbar} onOpenChange={setNavbar}>
            <div className="w-full flex flex-col gap-4">
              <CollapsibleTrigger asChild>
                <div className="p-3 flex justify-between items-center hover:bg-accent hover:text-accent-foreground cursor-pointer">
                  <div className="font-semibold">Navbar</div>
                  <div>
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="navbar"
                  render={({ field }) => (
                    <FormItem className="flex gap-2 items-center justify-start">
                      <FormLabel>Show Navbar</FormLabel>
                      <FormControl>
                        <Checkbox
                          checked={form.getValues("navbar")}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-3 items-end">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="navbarLogoText"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Navbar Logo Text</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your logo text here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="navbarLinkText1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Navbar Link Text 1</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your link text here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="navbarLink1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Navbar Link 1</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your link here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="navbarLinkText2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Navbar Link Text 2</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your link here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="navbarLink2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Navbar Link 2</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your link here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="navbarLinkText3"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Navbar Link Text 3</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your link here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="navbarLink3"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Navbar Link 3</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your link here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="resumeText"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resume Text</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your resume text here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="resumeLink"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resume Link</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your resume link here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
          {/* Hero */}
          <Collapsible open={hero} onOpenChange={setHero}>
            <div className="w-full flex flex-col gap-4">
              <CollapsibleTrigger asChild>
                <div className="p-3 flex justify-between items-center hover:bg-accent hover:text-accent-foreground cursor-pointer">
                  <div className="font-semibold">Hero</div>
                  <div>
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="hero"
                  render={({ field }) => (
                    <FormItem className="flex gap-2 items-center justify-start">
                      <FormLabel>Show Hero</FormLabel>
                      <FormControl>
                        <Checkbox
                          checked={form.getValues("hero")}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-3 items-end">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="heroTagText"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tag Text</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your tag text here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex gap-3 items-end">
                  <div className="flex flex-col gap-2 w-[340px]">
                    <FormField
                      control={form.control}
                      name="heroImage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hero Image</FormLabel>
                          <FormControl>
                            <ImageUpload
                              value={form.getValues("heroImage")}
                              onChange={(value) =>
                                form.setValue("heroImage", value)
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="heroText"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hero Text</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type your hero text here."
                            disabled={isLoading}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="heroDescriptionText"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hero Description Text</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your hero description here."
                            disabled={isLoading}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="heroPrimaryButtonText"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Button Text</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your text here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="heroPrimaryButtonLink"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Button Link</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your link here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="heroSecondaryButtonText"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Secondary Button Text</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your text here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="heroSecondaryButtonLink"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Secondary Button Link</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your link here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
          {/* Projects Showcase */}
          <Collapsible open={project} onOpenChange={setProject}>
            <div className="w-full flex flex-col gap-4">
              <CollapsibleTrigger asChild>
                <div className="p-3 flex justify-between items-center hover:bg-accent hover:text-accent-foreground cursor-pointer">
                  <div className="font-semibold">Projects</div>
                  <div>
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="project"
                  render={({ field }) => (
                    <FormItem className="flex gap-2 items-center justify-start">
                      <FormLabel>Show Projects</FormLabel>
                      <FormControl>
                        <Checkbox
                          checked={form.getValues("project")}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-3 items-end">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="projectSectionTagText"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Projects Section Tag Text</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your tag text here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="projectSectionHeading"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Projects Section Heading</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type your projects sections text here."
                            disabled={isLoading}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="projectSectionBodyText"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Projects Section Body Text</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your projects sections description here."
                            disabled={isLoading}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-3 items-end">
                  <div className="flex flex-col gap-2 w-[340px]">
                    <FormField
                      control={form.control}
                      name="projectImage1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project 1 Image</FormLabel>
                          <FormControl>
                            <ImageUpload
                              value={form.getValues("projectImage1")}
                              onChange={(value) =>
                                form.setValue("projectImage1", value)
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="projectText1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project 1 Heading</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type your project text here."
                            disabled={isLoading}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="projectBody1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project 1 Body</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type your project text here."
                            disabled={isLoading}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="projectLink1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project 1 Link</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type your project link here."
                            disabled={isLoading}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-3 items-end">
                  <div className="flex flex-col gap-2 w-[340px]">
                    <FormField
                      control={form.control}
                      name="projectImage2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project 2 Image</FormLabel>
                          <FormControl>
                            <ImageUpload
                              value={form.getValues("projectImage2")}
                              onChange={(value) =>
                                form.setValue("projectImage2", value)
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="projectText2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project 2 Heading</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type your project text here."
                            disabled={isLoading}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="projectBody2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project 2 Body</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type your project text here."
                            disabled={isLoading}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="projectLink2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project 2 Link</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type your project link here."
                            disabled={isLoading}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
          {/* Footer */}
          <Collapsible open={footer} onOpenChange={setFooter}>
            <div className="w-full flex flex-col gap-4">
              <CollapsibleTrigger asChild>
                <div className="p-3 flex justify-between items-center hover:bg-accent hover:text-accent-foreground cursor-pointer">
                  <div className="font-semibold">Footer</div>
                  <div>
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="footer"
                  render={({ field }) => (
                    <FormItem className="flex gap-2 items-center justify-start">
                      <FormLabel>Show Footer</FormLabel>
                      <FormControl>
                        <Checkbox
                          checked={form.getValues("footer")}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-3 items-end">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="footerText"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Footer Text</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your footer text here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="footerBodyText"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Footer Body Text</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type your footer body text here."
                            disabled={isLoading}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="footerLinkText1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Footer Link Text 1</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your footer link text here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="footerLink1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Footer Link 1</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your footer link here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="footerLinkText2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Footer Link Text 2</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your footer link text here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="footerLink2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Footer Link 2</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your footer link here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="footerLinkText3"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Footer Link Text 3</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your footer link text here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="footerLink3"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Footer Link 3</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type your footer link here."
                              disabled={isLoading}
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="footerCopyrightText"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Footer Copyright Text</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type your Footer Copyright Text here."
                            disabled={isLoading}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
          {/* Button */}
          <Button disabled={isLoading} onClick={form.handleSubmit(onSubmit)}>
            Save
          </Button>
        </form>
      </Form>
      {/* AI Form */}
      <Form {...aiForm}>
        <form
          onSubmit={(e) => e.preventDefault()} // Prevent any default form submission
          className="flex flex-col gap-6"
        >
          <FormField
            control={aiForm.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prompt</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type profession prompt here."
                    disabled={isAiLoading}
                    required={isPro}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant="premium"
            disabled={isAiLoading}
            onClick={() => {
              if (isPro) {
                aiForm.handleSubmit(onAiSubmit)(); // Trigger form submission
              } else {
                proModal.onOpen(); // Open Pro modal
              }
            }}
          >
            <div className="flex gap-1">
              <div>Generate</div>
              <WandSparkles className="w-5 h-5" />
            </div>
          </Button>
        </form>
      </Form>
      {/* Button on small devices for preview */}
      <Link
        target="_blank"
        href={"/" + currentUser?.username}
        className="mt-6 block md:hidden"
      >
        <div className="flex gap-1 items-center justify-center">
          <div>Preview in new tab</div>
          <ExternalLink className="w-5 h-5" />
        </div>
      </Link>
    </section>
  );
};

export default OptionsComponent;
