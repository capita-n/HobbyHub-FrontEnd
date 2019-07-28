import Head from "next/head";
import Navbar from "../components/Navbar"

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>HobbyHub</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
            </Head>
            <Navbar />
            <div className="container">
            {props.children}
            </div>
        </div>
    )
}

export default Layout;
