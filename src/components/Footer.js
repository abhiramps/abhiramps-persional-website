import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="py-4 bg-gray-800 dark:bg-dark1 dark:text-white transition duration-500 ">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6">
                            <p className="text-white mb-0">© 2020 All rights reserved. Designed by Abhiram.</p>
                        </div>
                        {/* <div className="col-auto">
                            <a href="#" className="me-3">Twitter</a>
                            <a href="#" className="me-3">Instagram</a>
                            <a href="#">Dribbble</a>
                        </div> */}
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
