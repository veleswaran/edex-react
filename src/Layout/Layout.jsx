export default function Layout({ children }) {
    return (
        <>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/users">users</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/user">Create</a>
                            </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/product">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="text" placeholder="Search" />
                            <button class="btn btn-primary" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <main style={{minHeight:"80vh"}}>
                {children}
            </main>
            <footer class="bg-dark text-white pt-5 pb-4">
                <div class="container text-md-left">
                    <div class="row text-md-left">

                        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Your Company</h5>
                            <p>
                                We provide world-class services and solutions to help your business thrive in the digital age.
                            </p>
                        </div>


                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Links</h5>
                            <p><a href="/" class="text-white text-decoration-none">Home</a></p>
                            <p><a href="/about" class="text-white text-decoration-none">About</a></p>
                            <p><a href="/services" class="text-white text-decoration-none">Services</a></p>
                            <p><a href="/contact" class="text-white text-decoration-none">Contact</a></p>
                        </div>


                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                            <p><i class="fas fa-home me-3"></i> 123 Main Street, City, Country</p>
                            <p><i class="fas fa-envelope me-3"></i> info@example.com</p>
                            <p><i class="fas fa-phone me-3"></i> +123 456 7890</p>
                        </div>

                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
                            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Follow us</h5>
                            <a href="/face" class="text-white me-4"><i class="fab fa-facebook-f"></i></a>
                            <a href="/twitter" class="text-white me-4"><i class="fab fa-twitter"></i></a>
                            <a href="/instagram" class="text-white me-4"><i class="fab fa-instagram"></i></a>
                            <a href="/linked" class="text-white me-4"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <hr class="mb-4 text-white" />

                    <div class="row align-items-center">
                        <div class="col-md-7 col-lg-8">
                            <p class="text-center text-md-start">© 2025 Your Company. All rights reserved.</p>
                        </div>
                        <div class="col-md-5 col-lg-4">
                            <p class="text-center text-md-end">
                                <a href="/" class="text-white text-decoration-none">Privacy Policy</a> |
                                <a href="/" class="text-white text-decoration-none">Terms</a>
                            </p>
                        </div>


                    </div>
                </div>
            </footer>

        </>
    )
}