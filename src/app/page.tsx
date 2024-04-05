import { AlertDialogDemo } from "@/components/alert/alert";
import { CardWithForm } from "@/components/card/card";
import { AccordionDemo } from "@/components/comp/data";
import { ProgressDemo } from "@/components/progressbar/progresh";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="ml-40 mr-40 mt-10">
  <AccordionDemo />

  </div>
  <div className="ml-40 mr-40 mt-10">
 
  <AlertDialogDemo />
  </div>
  <div className="ml-40 mr-40 mt-10">
    <CardWithForm />
  </div>
  <div className="ml-40 mr-40 mt-10">
    <ProgressDemo />
  </div>
    </>
  );
}
