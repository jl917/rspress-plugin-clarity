import type { RspressPlugin } from "@rspress/shared";

export default function rspressPluginClarity(projectId: string): RspressPlugin {
  return {
    name: "rspress-plugin-clarity",
    config(config) {
      return config;
    },
    builderConfig: {
      html: {
        tags: [
          {
            tag: "link",
            head: true,
            append: false,
            attrs: {
              rel: "preconnect",
              href: "https://www.clarity.ms",
            },
          },
          {
            tag: "script",
            head: false,
            append: false,
            children: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${projectId}");
            `,
          },
        ],
      },
    },
  };
}
