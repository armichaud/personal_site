declare module "*.module.scss" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.mp4" {
  const src: string;
  export default src;
}
