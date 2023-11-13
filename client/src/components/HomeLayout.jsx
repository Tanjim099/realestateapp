import Navbar from "./Navbar"
import Footer from "./Footer"

function HomeLayout({ Children }) {
    return (
        <div>
            <Navbar />
            <main className=" min-h-[80vh]">
                {Children}
            </main>
            <Footer />
        </div>
    )
}

export default HomeLayout