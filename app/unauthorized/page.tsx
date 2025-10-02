import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import ElysianEmporiumErrorLogo from "@/public/logo/elysian-emporium-ecommerce-logo-error.svg"


const Unauthorized = () => {
  return (
    <Container
      id="unauthorized"
      size={"2xl"}
      alignment={"center"}
      height={"screen"}
      padding={"px-sm"}
      gap={"none"}
      flow={"col"}
      className="space-y-6"
    >
      <Image
        src={ElysianEmporiumErrorLogo}
        alt="unauthorized svg"
        width={200}
        height={200}
        className="mb-5 rounded-2xl"
      />
      <Heading
        size={"6xl"}
        spacing={"normal"}
        lineHeight={"none"}
        margin={"none"}
        className="font-aeonik-black"
      >
        401
      </Heading>

      <p className="text-pretty">
        You are not authorized to access this page. Please contact support if
        you believe this is a mistake.
      </p>

      <div className="grid grid-cols-1 space-x-2">
        <Link href={"/"}>
          <Button variant={"destructive"}>
            Home
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default Unauthorized
