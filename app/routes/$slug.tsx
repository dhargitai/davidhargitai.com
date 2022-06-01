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
      <div className="py-12 font-medium leading-8 text-slate-500">
        <div className="table clear-both flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div className="relative px-32 pt-10 pb-20 text-slate-500 bg-white rounded-3xl" style={{zIndex: 2, marginBottom: '-260px'}}>
            <div className="box-border">
              <h1 className="mx-0 mt-0 mb-6 text-6xl font-bold opacity-100 text-slate-900">
                {post.title}
              </h1>
              <p className="mt-0 mb-12 opacity-100">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center -mb-4 opacity-100">
                {categories.map(category => (
                  <a key={category.slug.current} href={`/category/${category.slug.current}`} className="py-4 px-8 mr-8 font-bold leading-5 bg-gray-100 cursor-pointer text-slate-900 hover:bg-slate-900 hover:text-white" style={{textDecoration: 'none', transition: 'transform 300ms ease 0s, background-color 300ms ease 0s, color 300ms ease 0s, -webkit-transform 300ms ease 0s', borderRadius: '500px'}}>{category.title}</a>
                ))}
                <div>Last update: <time dateTime={updatedAt.toISOString()} itemProp="dateModified">{updatedAt.toDateString()}</time></div>
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
    
      <div className="pb-40 font-medium leading-8 text-slate-500">
        <div className="table clear-both px-6 mx-auto leading-8" style={{maxWidth: '838px', content: '" "', gridArea: '1 / 1 / 2 / 2'}}>
          <div className="opacity-100 box-border">
            <div className="table clear-both box-border" style={{content: '" "', gridArea: '1 / 1 / 2 / 2'}}>

              <BlockContent blocks={post.body} serializers={serializer} />
              
              <h2 className="mt-10 mb-6 text-4xl font-bold leading-6 text-slate-900">
                Design sprints are great
              </h2>
              <p className="mt-0 mb-6 text-slate-500">
                Egestas dui id ornare arcu odio. Ornare lectus sit amet est placerat
                in egestas erat imperdiet. Aenean vel elit scelerisque mauris
                pellentesque pulvinar. Mauris a
                <strong className="font-bold box-border text-slate-900">diam maecenas</strong>
                sed enim ut sem viverra. Posuere mori leo urna molestie at.Cras
                <a href="https://www.google.com/" className="bg-transparent cursor-pointer box-border text-slate-900 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'underline'}}>tincidunt </a>lobortis feugiat vivamus at augue eget arcu dictum. Aliquet bibendu
                enfacilisis gravida neque convallis a. At urna condimentum mattis
                pellentesque id nibh tortor id aliquet.
              </p>
              <ol start="" role="list" className="overflow-hidden pl-12 mt-0 mb-12 text-slate-500" style={{listStyle: 'outside none decimal'}}>
                <li className="mb-4 text-left" style={{listStyle: 'outside none decimal'}}>
                  Ornare lectus sit amet est placerat in egestas erat imperdiet.
                </li>
                <li className="mb-4 text-left" style={{listStyle: 'outside none decimal'}}>
                  Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum.
                </li>
                <li className="mb-4 text-left" style={{listStyle: 'outside none decimal'}}>
                  Posuere mori leo urna molestie at.
                </li>
                <li className="mb-4 text-left" style={{listStyle: 'outside none decimal'}}>
                  Aliquet bibendu enfacilisis gravida neque convallis a.
                </li>
              </ol>
              <h3 className="mt-12 mb-5 text-2xl font-bold leading-5 text-slate-900">
                Working on sprints can improve your design speed considerably
              </h3>
              <p className="mt-0 mb-6 text-slate-500">
                Egestas dui id ornare arcu odio. Ornare lectus sit amet est placerat
                in egestas erat imperdiet. Aenean vel elit scelerisque mauris
                pellentesque pulvinar. Mauris a diam maecenas sed enim ut sem viverra.
                Posuere mori leo urna molestie at. Cras tincidunt lobortis feugiat
                vivamus at augue eget arcu dictum. Aliquet bibendu enfacilisis gravida
                neque convallis a. At urna condimentum mattis pellentesque id nibh
                tortor id aliquet.
              </p>
              <figure style={{maxWidth: '1580pxpx'}} className="block clear-both relative mx-auto mt-0 mb-20 w-full text-center">
                <div className="inline-block text-transparent box-border" style={{fontSize: '0px'}}>
                  <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/6113ddbbd9e9dcf098a7213d_post-body-image-personal-x-template.jpg" loading="lazy" alt="" className="inline-block w-full max-w-full text-white align-middle rounded-3xl border-0" style={{fontSize: '0px'}} />
                </div>
                <figcaption className="block mt-6 text-gray-400" style={{captionSide: 'bottom'}}>
                  Ornare lectus sit amet est placerat in egestas erat imperdiet.
                </figcaption>
              </figure>
              <h4 className="mt-0 mb-4 text-xl font-bold leading-5 text-slate-900">
                It’s important for your team to follow the right sprint framework
              </h4>
              <p className="mt-0 mb-6 text-slate-500">
                Egestas dui id ornare arcu odio. Ornare lectus sit amet est placerat
                in egestas erat imperdiet. Aenean vel elit scelerisque mauris
                pellentesque pulvinar. Mauris a diam maecenas sed enim ut sem viverra.
                Posuere mori leo urna molestie at.Cras tincidunt lobortis feugiat
                vivamus at augue eget arcu dictum. Aliquet bibendu enfacilisis gravida
                neque convallis a. At urna condimentum mattis pellentesque id nibh
                tortor id aliquet.
              </p>
              <blockquote className="py-10 px-24 my-12 text-xl leading-7 text-center text-gray-600 bg-blue-50 rounded-3xl border-black">
                “Egestas dui id ornare arcu odio. Ornare lectus sit amet est placerat
                in egestas erat imperdiet. Aenean vel elit scelerisque mauris
                pellentesque pulvinar. &nbsp;dolor sit amet “
              </blockquote>
              <h5 className="mt-0 mb-2 text-lg font-bold leading-5 text-slate-900">
                One quote from the Sprint book:
              </h5>
              <p className="mt-0 mb-6 text-slate-500">
                Egestas dui id ornare arcu odio. Ornare lectus sit amet est placerat
                in egestas erat imperdiet. Aenean vel elit scelerisque mauris
                pellentesque pulvinar. Mauris a diam maecenas sed enim ut sem viverra.
                Posuere mori leo urna molestie at.Cras tincidunt lobortis feugiat
                vivamus at augue eget arcu dictum. Aliquet bibendu enfacilisis gravida
                neque convallis a. At urna condimentum mattis pellentesque id nibh
                tortor id aliquet.
              </p>
              <ul role="list" className="overflow-hidden pl-12 mt-0 mb-12 text-slate-500">
                <li className="mb-4 text-left">
                  Ornare lectus sit amet est placerat in egestas erat imperdiet.
                </li>
                <li className="mb-4 text-left">
                  Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum.
                </li>
                <li className="mb-4 text-left">Posuere mori leo urna molestie at.</li>
                <li className="mb-4 text-left">
                  Aliquet bibendu enfacilisis gravida neque convallis a.
                </li>
              </ul>
              <h6 className="mt-0 mb-4 text-base font-bold leading-5 text-slate-900">
                Wrapping up: Do design sprints work for you?
              </h6>
              <p className="mt-0 mb-6 text-slate-500">
                Egestas dui id ornare arcu odio. Ornare lectus sit amet est placerat
                in egestas erat imperdiet. Aenean vel elit scelerisque mauris
                pellentesque pulvinar. Mauris a diam maecenas sed enim ut sem viverra.
                Posuere mori leo urna molestie at. Cras tincidunt lobortis feugiat
                vivamus at augue eget arcu dictum. Aliquet bibendu enfacilisis gravida
                neque convallis a. At urna condimentum mattis pellentesque id nibh
                tortor id aliquet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px font-medium leading-8 bg-gray-100 box-border text-slate-500"
      />
      
      <div className="pt-20 pb-24 font-medium leading-8 text-slate-500">
        <div className="clear-both flex-col items-stretch px-6 mx-auto leading-8" style={{maxWidth: '1248px', gridArea: '1 / 1 / 2 / 2'}}>
          <div className="flex-col items-center mx-auto mb-16 text-slate-500" style={{maxWidth: '720px'}}>
            <h2 className="my-0 text-4xl font-bold leading-6 text-slate-900">
              Latest posts
            </h2>
            <a href="/blog" className="inline-block py-6 px-16 mb-6 text-lg font-bold text-center text-white border-0 border-none cursor-pointer bg-slate-900 hover:bg-white hover:text-slate-900" style={{textDecoration: 'none', borderRadius: '80px', transition: 'color 300ms ease 0s, transform 300ms ease 0s, box-shadow 300ms ease 0s, background-color 300ms ease 0s, -webkit-transform 300ms ease 0s'}}>Browse all posts</a>
          </div>
          <div className="box-border">
            <div role="list" className="mx-auto text-slate-500" style={{maxWidth: '720px', columnGap: '27px', gridTemplateColumns: '1fr', gridTemplateRows: 'auto'}}>
              <div role="listitem" className="box-border">
                <a href="/blog/what-is-the-right-design-tool-to-choose-in-2022" className="flex overflow-hidden flex-col max-w-full min-h-full bg-white border border-solid cursor-pointer box-border border-zinc-200 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', borderRadius: '20px', transform: 'translate(0px, 0px)'}}><div className="flex flex-col justify-center h-48">
                    <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/611418e277292729f8324d1c_post-01-featured-image-personal-x-template.jpg" alt="What is the right design tool to choose in 2022?" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border will-change-transform" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1.0011, 1.0011, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
                  </div>
                  <div className="px-6 pt-6 pb-12">
                    <h3 className="mt-0 mb-5 text-2xl font-bold leading-5 text-slate-900">
                      What is the right design tool to choose in 2022?
                    </h3>
                    <div className="flex flex-wrap items-center box-border">
                      <div className="box-border">UI/UX</div>
                      <div className="mx-3 w-5 bg-zinc-200" style={{minHeight: '1px'}} />
                      <div className="box-border">August 26, 2021</div>
                    </div>
                  </div></a>
              </div>
              <div role="listitem" className="box-border">
                <a href="/blog/font-sizes-in-ui-design-the-complete-guide-to-follow" className="flex overflow-hidden flex-col max-w-full min-h-full bg-white border border-solid cursor-pointer box-border border-zinc-200 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', borderRadius: '20px', transform: 'translate(0px, 0px)'}}><div className="flex flex-col justify-center h-48">
                    <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/611418854f62aac0a4e703c7_post-02-featured-image-personal-x-template.jpg" alt="Font sizes in UI design: The complete guide to follow" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
                  </div>
                  <div className="px-6 pt-6 pb-12">
                    <h3 className="mt-0 mb-5 text-2xl font-bold leading-5 text-slate-900">
                      Font sizes in UI design: The complete guide to follow
                    </h3>
                    <div className="flex flex-wrap items-center box-border">
                      <div className="box-border">UI/UX</div>
                      <div className="mx-3 w-5 bg-zinc-200" style={{minHeight: '1px'}} />
                      <div className="box-border">August 23, 2021</div>
                    </div>
                  </div></a>
              </div>
              <div role="listitem" className="box-border">
                <a href="/blog/6-practical-exercises-to-learn-become-a-pro-ui-ux-designer" className="flex overflow-hidden flex-col max-w-full min-h-full bg-white border border-solid cursor-pointer box-border border-zinc-200 hover:text-slate-500" style={{transition: 'color 300ms ease 0s', textDecoration: 'none', borderRadius: '20px', transform: 'translate(0px, 0px)'}}><div className="flex flex-col justify-center h-48">
                    <img src="https://assets.website-files.com/61129bb2ecedf8658b4c6911/61141875f2025117a96d5d32_post-03-featured-image-personal-x-template.jpg" alt="6 practical exercises to learn become a pro UI/UX designer" className="inline-block object-cover w-full max-w-full h-full align-middle border-0 box-border" />
                  </div>
                  <div className="px-6 pt-6 pb-12">
                    <h3 className="mt-0 mb-5 text-2xl font-bold leading-5 text-slate-900">
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
      </div>

    {/* 
    <div className="flex flex-wrap container px-5 py-12 mx-auto">
      <main className="w-full text-xl lg:w-4/5 xl:w-3/4 prose lg:pr-8 mx-auto mb-8 md:mb-0">
      <h1 className="text-4xl mb-12">{post.title}</h1>
        <BlockContent blocks={post.body} serializers={serializer} />
      </main>
    </div>
    */}
    </BasicLayout>
  );
}
