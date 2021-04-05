const PiklerForm = () => {
    return (
        <div>
            <form>
                <h2>Pikler Triangle, Climbing Board, and Arch Order Form</h2>
                <p>After you fill out this order request, we will contact you via email to go over details and availability before the order is completed.</p>
                <p>If you have any questions regarding our products (size, material, etc...) please visit our FAQ section on the MKE Timber Designs LLC Facebook page. https://www.facebook.com/mketimberdesigns</p>
                <p>If you have any other questions, or concerns, please send us a message via Facebook or email us at mketimberdesigns@gmail.com</p>

                <div className="form-inputs">
                    <label htmlFor="productDropdown" className="form-label">
                        What would you like to order?
                    </label>
                    <select id="productDropdown" name="productDropdown">
                        <optgroup label="Pikler Triangle">
                            <option value="triangleWBoard">Triangle w/ Climbing Board ($200)</option>
                            <option value="climbingBoard">Climbing Board ($50)</option>
                        </optgroup>
                        <optgroup label="Pikler/Arch Combo">
                            <option value="triangleSmArch">Triangle + Climbing Board + Small Arch ($240)</option>
                            <option value="triangleMdArch">Triangle + Climbing Board + Medium Arch ($280)</option>
                            <option value="triangleLgArch">Triangle + Climbing Board + Large Arch ($320)</option>
                            <option value="triangleAllArch">Triangle + Climbing Board + All 3 Arches ($440)</option>
                        </optgroup>
                        <optgroup label="Arches">
                            <option value="SmArch">Small Arch ($60)</option>
                            <option value="MdArch">Medium Arch ($100)</option>
                            <option value="LgArch">Large Arch ($140)</option>
                            <option value="AllArch">All 3 Arches ($240)</option>
                        </optgroup>
                    </select>
                </div>

                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email Address
                    </label>
                    <input id="email" type="email" name="email" className="form-input" placeholder="enter your email" />
                </div>

                <div className="form-inputs">
                    <label htmlFor="fullName" className="form-label">
                        Full Name
                    </label>
                    <input id="fullName" type="text" name="fullName" className="form-input" placeholder="enter your full name" />
                </div>

                <div className="form-inputs">
                    <label htmlFor="phone" className="form-label">
                        Phone number
                    </label>
                    <input id="phone" type="text" name="phone" className="form-input" placeholder="enter your phone number" />
                </div>

                <div className="form-inputs">
                    <label htmlFor="comments" className="form-label">
                        Additional comments
                    </label>
                    <input id="comments" type="text" name="comments" className="form-input" placeholder="enter any additional comments on your order" />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PiklerForm
