import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BlockContent from "@sanity/block-content-to-react";
import { imageUrlFor, serializer, content } from '~/utils';
import { BasicLayout } from '~/components';

type PostData = {
  publishedAt: Date,
  _updatedAt: Date,
  slug: string,
  title: string,
  categories: Array<{ title: string, slug: string }>
  body: string;
  excerpt: string;
  mainImage: { asset: { _ref: string } }
};

export let loader: LoaderFunction = async ({ params }) => {
  const matchingPosts = await content.fetch("*[_type == 'post' && slug.current == $slug] {mainImage, publishedAt, _updatedAt, slug, title, body, excerpt, 'categories': categories[]->{title, slug}}", {
    slug: params.slug
  });

  if (!matchingPosts || !matchingPosts.length) {
    throw new Response('Post not found', { status: 404 })
  }

  let data: PostData = matchingPosts[0];

  return json(data);
};

export let meta: MetaFunction = ({data} : { data: PostData }) => {
  return {
    title: `${data.title} – David Hargitai`,
    description: data.excerpt,
  };
};

export default function Index() {
  let post = useLoaderData<PostData>()
  let updatedAt = new Date(post._updatedAt)
  let categories = post.categories || []
  let heroImageBaseUrl = imageUrlFor(post.mainImage.asset)

  return (
    <BasicLayout>
      <div className="py-8 sm:py-12 font-medium leading-8 text-slate-500">
        <div className="table clear-both flex-col items-stretch  mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div className="relative py-8 px-5 sm:px-16 lg:px-32 sm:pt-10 sm:pb-20 text-slate-500 bg-white rounded-3xl" style={{zIndex: 2, marginBottom: '-260px'}}>
            <div className="box-border">
              <h1 className="mx-0 mt-0 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold opacity-100 text-slate-900">
                {post.title}
              </h1>
              <p className="mt-0 mb-12 opacity-100">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center -mb-4 opacity-100">
                <div className="mb-6 w-full">Last update: <time dateTime={updatedAt.toISOString()} itemProp="dateModified">{updatedAt.toDateString()}</time></div>
                {categories.map(category => (
                  <a key={category.slug.current} href={`/category/${category.slug.current}`} className="py-4 px-8 mr-8 font-bold leading-5 bg-gray-100 cursor-pointer text-slate-900 hover:bg-slate-900 hover:text-white" style={{textDecoration: 'none', transition: 'transform 300ms ease 0s, background-color 300ms ease 0s, color 300ms ease 0s, -webkit-transform 300ms ease 0s', borderRadius: '500px'}}>{category.title}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>



      
      
      <div className="font-medium leading-8 text-slate-500 relative" style={{minHeight: '68vh'}}>
        <div className="overflow-hidden leading-8 bg-blue-50 box-border absolute" style={{zIndex: -1, inset: '0%'}}>
          <picture>
            <source src={`${heroImageBaseUrl}?w=400&h=150&fit=crop&crop=entropy&format=auto`} media="(max-width: 400px)" />
            <source src={`${heroImageBaseUrl}?w=800&h=300&fit=crop&crop=entropy&format=auto`} media="(max-width: 800px)" />
            <img loading="eager" src={`${heroImageBaseUrl}?w=1440&h=500&fit=crop&crop=entropy&format=auto`} alt={`${post.title} hero image`} className="inline-block object-cover w-full max-w-full h-full align-middle border-0 opacity-100 box-border" />
          </picture>
        </div>
      </div>
    
      <div className="pb-14 lg:pb-32 font-medium leading-8 text-slate-500">
        <div className="table clear-both px-6 mx-auto leading-8" style={{maxWidth: '838px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div className="opacity-100 box-border">
            <div className="table clear-both box-border" style={{content: '" "', gridArea: '1 / 1 / 2 / 2'}}>

              <BlockContent blocks={post.body} serializers={serializer} />
              
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-px font-medium leading-8 bg-gray-100 box-border text-slate-500"
      />
      
      <div className="pt-14 lg:pt-20 pb-14 lg:pb-24 font-medium leading-8 text-slate-500">
        <div className="clear-both flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', gridArea: '1 / 1 / 2 / 2'}}>
          <div className="flex-col items-center mx-auto mb-16 text-slate-500" style={{maxWidth: '720px'}}>
            <h2 className="my-0 text-4xl font-bold leading-6 text-slate-900">
              Latest posts
            </h2>
            <a href="/blog" className="inline-block py-6 px-16 mb-6 text-lg font-bold text-center text-white border-0 border-none cursor-pointer bg-slate-900 hover:bg-white hover:text-slate-900" style={{textDecoration: 'none', borderRadius: '80px', transition: 'color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s'}}>Browse all posts</a>
          </div>
          <div className="box-border">
            <div role="list" className="mx-auto text-slate-500 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div role="listitem" className="box-border mb-6">
                <a href="/blog/what-is-the-right-design-tool-to-choose-in-2022" className="flex overflow-hidden flex-col max-w-full min-h-full bg-white border border-solid cursor-pointer box-border border-zinc-200 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', borderRadius: '20px', transform: 'translate(0px, 0px)'}}><div className="flex flex-col justify-center h-48">
                    <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/611418e277292729f8324d1c_post-01-featured-image-personal-x-template.jpg" alt="What is the right design tool to choose in 2022?" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border will-change-transform" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1.0011, 1.0011, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
                  </div>
                  <div className="px-6 pt-6 pb-12">
                    <h3 className="mt-0 mb-5 text-2xl font-bold text-slate-900">
                      What is the right design tool to choose in 2022?
                    </h3>
                    <div className="flex flex-wrap items-center box-border">
                      <div className="box-border">UI/UX</div>
                      <div className="mx-3 w-5 bg-zinc-200" style={{minHeight: '1px'}} />
                      <div className="box-border">August 26, 2021</div>
                    </div>
                  </div></a>
              </div>
              <div role="listitem" className="box-border mb-6">
                <a href="/blog/font-sizes-in-ui-design-the-complete-guide-to-follow" className="flex overflow-hidden flex-col max-w-full min-h-full bg-white border border-solid cursor-pointer box-border border-zinc-200 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', borderRadius: '20px', transform: 'translate(0px, 0px)'}}><div className="flex flex-col justify-center h-48">
                    <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/611418854f62aac0a4e703c7_post-02-featured-image-personal-x-template.jpg" alt="Font sizes in UI design: The complete guide to follow" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
                  </div>
                  <div className="px-6 pt-6 pb-12">
                    <h3 className="mt-0 mb-5 text-2xl font-bold text-slate-900">
                      Font sizes in UI design: The complete guide to follow
                    </h3>
                    <div className="flex flex-wrap items-center box-border">
                      <div className="box-border">UI/UX</div>
                      <div className="mx-3 w-5 bg-zinc-200" style={{minHeight: '1px'}} />
                      <div className="box-border">August 23, 2021</div>
                    </div>
                  </div></a>
              </div>
              <div role="listitem" className="box-border mb-6">
                <a href="/blog/6-practical-exercises-to-learn-become-a-pro-ui-ux-designer" className="flex overflow-hidden flex-col max-w-full min-h-full bg-white border border-solid cursor-pointer box-border border-zinc-200 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', borderRadius: '20px', transform: 'translate(0px, 0px)'}}><div className="flex flex-col justify-center h-48">
                    <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/61141875f2025117a96d5d32_post-03-featured-image-personal-x-template.jpg" alt="6 practical exercises to learn become a pro UI/UX designer" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" />
                  </div>
                  <div className="px-6 pt-6 pb-12">
                    <h3 className="mt-0 mb-5 text-2xl font-bold text-slate-900">
                      6 practical exercises to learn become a pro UI/UX designer
                    </h3>
                    <div className="flex flex-wrap items-center box-border">
                      <div className="box-border">UI/UX</div>
                      <div className="mx-3 w-5 bg-zinc-200" style={{minHeight: '1px'}} />
                      <div className="box-border">August 21, 2021</div>
                    </div>
                  </div></a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </BasicLayout>
  );
}
