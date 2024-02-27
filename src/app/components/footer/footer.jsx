'use client'
import { usePathname } from 'next/navigation'
import './style.css'

const Footer = () => {
    const router = usePathname()
    return (
        <>

            <div id='footer' className={router === '/' ? '' : 'footer-pages'}>
                <div className="box-footer">
                    <h3>
                        New york Office
                    </h3>
                    <div>
                        <p>
                            555-1234
                        </p>
                        <p>
                            info@archi.it
                        </p>
                    </div>
                    <div>
                        <p>
                            123 Main Street
                        </p>
                        <p>
                            State: Italy
                        </p>
                    </div>
                </div>
                <div className="box-footer">
                    <h3>
                        Paris Office
                    </h3>
                    <div>
                        <p>
                            555-1234
                        </p>
                        <p>
                            info@archi.it
                        </p>
                    </div>
                    <div>
                        <p>
                            123 Main Street
                        </p>
                        <p>
                            State: Italy
                        </p>
                    </div>
                </div>
                <div className="box-footer">
                    <h3>
                        Berlin Office
                    </h3>
                    <div>
                        <p>
                            555-1234
                        </p>
                        <p>
                            info@archi.it
                        </p>
                    </div>
                    <div>
                        <p>
                            123 Main Street
                        </p>
                        <p>
                            State: Italy
                        </p>
                    </div>
                </div>


            </div>
            <div id='closer'>
                <p>©2023 ARCHY INC. - SF</p>
            </div>
        </>
    )
}

export default Footer