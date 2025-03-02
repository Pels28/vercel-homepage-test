"use client"
import {Card as HeroCard, CardBody} from "@heroui/react";
import { ReactNode } from "react";

interface ICardProps {
    children: ReactNode
    className?: string 
}

export default function Card({children, className}: ICardProps) {
  return (
    <HeroCard className={className}>
      <CardBody>
        {children}
      </CardBody>
    </HeroCard>
  );
}
