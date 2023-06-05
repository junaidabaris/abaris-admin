function OtpTypes() {
    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        <h3 className="mb-0 h6">Nexmo OTP</h3>
                    </div>
                    <div className="card-body text-center">
                        <label className="aiz-switch aiz-switch-success mb-0">
                            <input type="checkbox" onchange="updateSettings(this, 'nexmo')" defaultChecked />
                            <span className="slider round" />
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OtpTypes;