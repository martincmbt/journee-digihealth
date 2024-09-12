"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import React, { use } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Professeur de médecine / praticien hospitalier - Université Paris Cité - AP-HP - co-directeur des DU santé connectée, metaverse en santé et diététique / nutrition clinique - chaîne yt PuMS et chroniqueur France Inter",
    imageSrc: avatar1.src,
    name: "Boris Hansel",
    username: "",
  },
  {
    text: "Professeur de Radiologie à l'Université Paris Cité",
    imageSrc: avatar2.src,
    name: "Laure Fournier",
    username: "",
  },
  {
    text: "Professeur des universités - Praticien hospitalier chez AP-HP, Assistance Publique - Hôpitaux de Paris",
    imageSrc: avatar3.src,
    name: "Roman Hossein Khonsari",
    username: "",
  },
  {
    text: "MCU-PH - Maladies Infectieuses et Tropicales, Université Paris Cité, AP-HP",
    imageSrc: avatar4.src,
    name: "Nathan Peiffer Smadja",
    username: "",
  },
  {
    text: "Professeur des Universités en Biostatistique - Praticien Hospitalier",
    imageSrc: avatar5.src,
    name: "Roch Giorgi",
    username: "",
  },
  {
    text: "CTO Secteur Public, Transport, Santé et Éducation chez Microsoft France & Membre du Groupe de Travail OpenSource à la Green Software Foundation",
    imageSrc: avatar6.src,
    name: "Pierre Lagarde",
    username: "",
  },
  {
    text: "Head of data science platform at Imagine - Institute of genetic diseases - créateur de Dr warehouse - co créateur de codoc",
    imageSrc: avatar7.src,
    name: "Nicolas Garcelon",
    username: "",
  },
  {
    text: "Coordonnateur du DES de Médecine Intensive Réanimation d'Ile-de-France",
    imageSrc: avatar8.src,
    name: "Damien Roux",
    username: "",
  },
  {
    text: "Professeur des Universités, Praticien Hospitalier (PU-PH) chez CHU de Lille / Université de Lille",
    imageSrc: avatar9.src,
    name: "Emmanuel Chazard",
    username: "",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, username }) => (
                <div className="card" key={username}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={imageSrc}
                      alt={name}
                      className="h-10 w-10 rounded-full hidden"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 tracking-tight hidden">{username}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag hidden">Intervenants</div>
          </div>

          <h2 className="section-title mt-20">Intervenants</h2>
          <p className="section-des mt-5 hidden">
            XXX intervenants de tous les horizons.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
