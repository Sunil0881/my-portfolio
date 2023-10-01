const Nav = () => {
    return (
        <div className="flex justify-end pr-10 absolute pt-40 pl-7">
        <div className="flex justify-center rounded-full   bg-white/10 w-16 h-[318px] -pl-10 ">
            <div className=" ">
                <div className="pt-7  ">
                    <svg   xmlns="http://www.w3.org/2000/svg" width="32.236"  height="32" id="house"><path d="M1.656 17.756 16 5.324l14.344 12.432a1.001 1.001 0 0 0 1.312-1.512l-15-13a1 1 0 0 0-1.31 0L10 7.876V6a2 2 0 0 0-4 0v5.342L.344 16.244a1.003 1.003 0 0 0-.1 1.412c.364.416.994.462 1.412.1zM12 22h8v10h6a2 2 0 0 0 2-2v-9.802c0-.6-.268-1.166-.732-1.546l-10-8.198a1.996 1.996 0 0 0-2.536 0l-10 8.198A1.993 1.993 0 0 0 4 20.198V30a2 2 0 0 0 2 2h6V22z"  fill="#ffff" ></path></svg>
                </div>
                <div className="pt-7">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="person"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"  fill="#ffff"></path></svg>
                </div>
                <div className="pt-7">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffff" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="service"  ><path d="M505.329 324.301c-12.496-7.39-28.143-8.585-42.107-2.392 0 0-.054.056-.272.109-.054.054-.163.054-.218.109.054 0 0 0-.163.054l-.109.054-.054.054c-.217.054-.435.163-.706.272-5.107 2.281-25.047 11.138-92.852 41.129v-.109c-15.213-21.569-41.998-5.651-78.291-2.5-56.287-28.849-109.423-57.101-167.72-55.309v115.454h9.671l121.05 47.812c19.777 7.823 42.215 5.814 60.362-5.324l191.517-118.17C513.315 340.654 513.37 329.027 505.329 324.301zM100.649 291.555h-9.716v-7.268c0-5.681-4.604-10.285-10.285-10.285H10.932c-5.681 0-10.285 4.604-10.285 10.285v164.742c0 5.681 4.604 10.285 10.285 10.285h69.716c5.681 0 10.285-4.604 10.285-10.285v-7.268h9.716c6.263 0 11.34-5.078 11.34-11.341V302.896C111.99 296.633 106.912 291.555 100.649 291.555zM59.471 443.539c-6.99 0-12.716-5.725-12.716-12.715 0-6.989 5.726-12.715 12.716-12.715 6.989 0 12.715 5.726 12.715 12.715C72.186 437.814 66.46 443.539 59.471 443.539z"></path><path d="M193.495,195.43l21.725,2.498c2.607,11.297,7.06,22.16,13.252,31.937l-13.687,17.163c-3.584,4.562-3.15,10.971,0.869,14.99l14.99,14.99c4.019,4.019,10.428,4.454,14.99,0.869l17.163-13.686c9.776,6.192,20.638,10.645,31.936,13.251l2.498,21.726c1.702,15.038,21.441,8.544,32.262,9.993c5.757,0,10.537-4.237,11.189-9.993l2.498-21.726c11.298-2.606,22.16-7.061,31.936-13.253l17.163,13.688c4.562,3.584,10.971,3.15,14.99-0.869l14.99-14.99c4.019-4.019,4.454-10.428,0.87-14.991l-13.687-17.163c6.192-9.776,10.645-20.638,13.252-31.935l21.725-2.499c5.757-0.651,9.993-5.43,9.993-11.189v-21.073c0-5.757-4.236-10.536-9.993-11.189l-21.725-2.499c-2.607-11.296-7.06-22.16-13.252-31.935l13.687-17.163c3.584-4.562,3.15-10.971-0.87-14.99l-14.99-14.99c-4.019-4.019-10.428-4.454-14.99-0.869l-17.163,13.686c-9.776-6.192-20.638-10.645-31.936-13.251l-2.498-21.726c-0.652-5.758-5.431-9.993-11.189-9.993h-21.073c-5.757,0-10.537,4.237-11.189,9.993l-2.498,21.726c-11.298,2.606-22.16,7.059-31.936,13.251l-17.163-13.686c-4.562-3.584-10.971-3.149-14.99,0.87l-14.99,14.99c-4.019,4.019-4.453,10.427-0.869,14.99l13.687,17.162c-6.192,9.777-10.645,20.639-13.252,31.937l-21.725,2.499c-5.757,0.651-9.993,5.432-9.993,11.189v21.073C183.502,190,187.738,194.779,193.495,195.43z M284.001,138.859c19.301-19.301,50.52-19.301,69.821,0c19.171,19.171,19.171,50.519,0,69.691c-19.301,19.301-50.52,19.301-69.821,0C264.7,189.379,264.7,158.03,284.001,138.859z"  fill="#ffff"></path></svg>
                </div>
                <div className="pt-7">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="work"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"  fill="#ffff"></path></svg>
                </div>
                <div className="pt-7 pb-7">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" id="message"><path d="M27 5H5a3 3 0 0 0-3 3v.4l13.64 7.33a1 1 0 0 0 .78 0L30 8.4V8a3 3 0 0 0-3-3zm2.68 20.32A3 3 0 0 0 30 24V10.67l-9.1 4.89zM2 10.67V24a3 3 0 0 0 .32 1.32l8.78-9.76zm15.31 6.82a3.16 3.16 0 0 1-1.33.3 3 3 0 0 1-1.24-.27l-1.83-1-9.15 10.2A3 3 0 0 0 5 27h22a3 3 0 0 0 1.25-.28l-9.17-10.18z" data-name="Message"  fill="#ffff"></path></svg>
                </div>
            </div>
        </div>
        </div>
            );
}
 export default Nav;