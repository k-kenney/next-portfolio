import AnimatedText from "@/componenets/AnimatedText";
import Layout from "@/componenets/Layout";
import Head from "next/head";
import React from "react";

const projects = () => {
  return (
    <>
      <Head>
        <title>Kayla Kenney | Projects Page</title>
        <meta name="description" content="font-end web developer"></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
            <AnimatedText text="Imagination Trumps Knowledge!"/>

            <div className="grid grid-cols-12 gap-24">
                <div className="col-span-12">
                    Featured Project
                </div>
                <div className="col-span-6">
                    Project-1
                </div>
                <div className="col-span-6">
                    Project-2
                </div>
                
            </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
