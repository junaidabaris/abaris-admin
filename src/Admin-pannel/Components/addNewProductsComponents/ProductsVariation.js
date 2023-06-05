import { useState } from "react";

function ProductsVariation() {
    const [prodVariationVal, setProdVariationVal] = useState({ color: '', selectColor: '', attribute: '', colorsAttribute: '' });

    const onChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpVal = e.target.value;
        const clonedObj = { ...prodVariationVal };
        clonedObj[inpName] = inpVal;
        // setProdVariationVal(clonedObj);
    };

    const getVarData = () => {
        // console.log(prodVariationVal)
    }

    return (
        <>
        
            {/* <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Product Variation</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row gutters-5">
                                                <div className="col-md-3">
                                                    <input type="text" name="color" onChange={onChangeHandler} className="form-control" defaultValue="Colors" fdprocessedid="onzz4" />
                                                </div>
                                                <div className="col-md-8">
                                                    <select className="form-select" name="select_color" aria-label="Default select example" onChange={onChangeHandler}>
                                                        <option>Nothing Selected</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                    <div className="dropdown bootstrap-select show-tick disabled form-control aiz-">
                                                        <select className="form-control aiz-selectpicker" data-live-search="true" data-selected-text-format="count" name="colors[]" id="colors" multiple disabled tabIndex={-98}>
                                                            <option value="#F0F8FF" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#F0F8FF'></span><span>AliceBlue</span></span>" />
                                                            <option value="#9966CC" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#9966CC'></span><span>Amethyst</span></span>" />
                                                            <option value="#FAEBD7" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FAEBD7'></span><span>AntiqueWhite</span></span>" />
                                                            <option value="#00FFFF" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#00FFFF'></span><span>Aqua</span></span>" />
                                                            <option value="#7FFFD4" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#7FFFD4'></span><span>Aquamarine</span></span>" />
                                                            <option value="#F0FFFF" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#F0FFFF'></span><span>Azure</span></span>" />
                                                            <option value="#F5F5DC" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#F5F5DC'></span><span>Beige</span></span>" />
                                                            <option value="#FFE4C4" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFE4C4'></span><span>Bisque</span></span>" />
                                                            <option value="#000000" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#000000'></span><span>Black</span></span>" />
                                                            <option value="#FFEBCD" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFEBCD'></span><span>BlanchedAlmond</span></span>" />
                                                            <option value="#0000FF" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#0000FF'></span><span>Blue</span></span>" />
                                                            <option value="#8A2BE2" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#8A2BE2'></span><span>BlueViolet</span></span>" />
                                                            <option value="#A52A2A" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#A52A2A'></span><span>Brown</span></span>" />
                                                            <option value="#DEB887" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#DEB887'></span><span>BurlyWood</span></span>" />
                                                            <option value="#5F9EA0" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#5F9EA0'></span><span>CadetBlue</span></span>" />
                                                            <option value="#7FFF00" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#7FFF00'></span><span>Chartreuse</span></span>" />
                                                            <option value="#D2691E" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#D2691E'></span><span>Chocolate</span></span>" />
                                                            <option value="#FF7F50" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FF7F50'></span><span>Coral</span></span>" />
                                                            <option value="#6495ED" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#6495ED'></span><span>CornflowerBlue</span></span>" />
                                                            <option value="#FFF8DC" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFF8DC'></span><span>Cornsilk</span></span>" />
                                                            <option value="#DC143C" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#DC143C'></span><span>Crimson</span></span>" />
                                                            <option value="#00FFFF" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#00FFFF'></span><span>Cyan</span></span>" />
                                                            <option value="#00008B" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#00008B'></span><span>DarkBlue</span></span>" />
                                                            <option value="#008B8B" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#008B8B'></span><span>DarkCyan</span></span>" />
                                                            <option value="#B8860B" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#B8860B'></span><span>DarkGoldenrod</span></span>" />
                                                            <option value="#A9A9A9" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#A9A9A9'></span><span>DarkGray</span></span>" />
                                                            <option value="#006400" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#006400'></span><span>DarkGreen</span></span>" />
                                                            <option value="#BDB76B" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#BDB76B'></span><span>DarkKhaki</span></span>" />
                                                            <option value="#8B008B" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#8B008B'></span><span>DarkMagenta</span></span>" />
                                                            <option value="#556B2F" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#556B2F'></span><span>DarkOliveGreen</span></span>" />
                                                            <option value="#FF8C00" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FF8C00'></span><span>DarkOrange</span></span>" />
                                                            <option value="#9932CC" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#9932CC'></span><span>DarkOrchid</span></span>" />
                                                            <option value="#8B0000" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#8B0000'></span><span>DarkRed</span></span>" />
                                                            <option value="#E9967A" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#E9967A'></span><span>DarkSalmon</span></span>" />
                                                            <option value="#8FBC8F" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#8FBC8F'></span><span>DarkSeaGreen</span></span>" />
                                                            <option value="#483D8B" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#483D8B'></span><span>DarkSlateBlue</span></span>" />
                                                            <option value="#2F4F4F" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#2F4F4F'></span><span>DarkSlateGray</span></span>" />
                                                            <option value="#00CED1" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#00CED1'></span><span>DarkTurquoise</span></span>" />
                                                            <option value="#9400D3" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#9400D3'></span><span>DarkViolet</span></span>" />
                                                            <option value="#FF1493" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FF1493'></span><span>DeepPink</span></span>" />
                                                            <option value="#00BFFF" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#00BFFF'></span><span>DeepSkyBlue</span></span>" />
                                                            <option value="#696969" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#696969'></span><span>DimGray</span></span>" />
                                                            <option value="#1E90FF" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#1E90FF'></span><span>DodgerBlue</span></span>" />
                                                            <option value="#B22222" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#B22222'></span><span>FireBrick</span></span>" />
                                                            <option value="#FFFAF0" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFFAF0'></span><span>FloralWhite</span></span>" />
                                                            <option value="#228B22" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#228B22'></span><span>ForestGreen</span></span>" />
                                                            <option value="#FF00FF" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FF00FF'></span><span>Fuchsia</span></span>" />
                                                            <option value="#DCDCDC" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#DCDCDC'></span><span>Gainsboro</span></span>" />
                                                            <option value="#F8F8FF" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#F8F8FF'></span><span>GhostWhite</span></span>" />
                                                            <option value="#FFD700" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFD700'></span><span>Gold</span></span>" />
                                                            <option value="#DAA520" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#DAA520'></span><span>Goldenrod</span></span>" />
                                                            <option value="#808080" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#808080'></span><span>Gray</span></span>" />
                                                            <option value="#008000" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#008000'></span><span>Green</span></span>" />
                                                            <option value="#ADFF2F" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#ADFF2F'></span><span>GreenYellow</span></span>" />
                                                            <option value="#F0FFF0" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#F0FFF0'></span><span>Honeydew</span></span>" />
                                                            <option value="#FF69B4" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FF69B4'></span><span>HotPink</span></span>" />
                                                            <option value="#CD5C5C" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#CD5C5C'></span><span>IndianRed</span></span>" />
                                                            <option value="#4B0082" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#4B0082'></span><span>Indigo</span></span>" />
                                                            <option value="#FFFFF0" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFFFF0'></span><span>Ivory</span></span>" />
                                                            <option value="#F0E68C" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#F0E68C'></span><span>Khaki</span></span>" />
                                                            <option value="#E6E6FA" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#E6E6FA'></span><span>Lavender</span></span>" />
                                                            <option value="#FFF0F5" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFF0F5'></span><span>LavenderBlush</span></span>" />
                                                            <option value="#7CFC00" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#7CFC00'></span><span>LawnGreen</span></span>" />
                                                            <option value="#FFFACD" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFFACD'></span><span>LemonChiffon</span></span>" />
                                                            <option value="#ADD8E6" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#ADD8E6'></span><span>LightBlue</span></span>" />
                                                            <option value="#F08080" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#F08080'></span><span>LightCoral</span></span>" />
                                                            <option value="#E0FFFF" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#E0FFFF'></span><span>LightCyan</span></span>" />
                                                            <option value="#FAFAD2" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FAFAD2'></span><span>LightGoldenrodYellow</span></span>" />
                                                            <option value="#90EE90" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#90EE90'></span><span>LightGreen</span></span>" />
                                                            <option value="#D3D3D3" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#D3D3D3'></span><span>LightGrey</span></span>" />
                                                            <option value="#FFB6C1" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFB6C1'></span><span>LightPink</span></span>" />
                                                            <option value="#FFA07A" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFA07A'></span><span>LightSalmon</span></span>" />
                                                            <option value="#FFA07A" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFA07A'></span><span>LightSalmon</span></span>" />
                                                            <option value="#20B2AA" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#20B2AA'></span><span>LightSeaGreen</span></span>" />
                                                            <option value="#87CEFA" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#87CEFA'></span><span>LightSkyBlue</span></span>" />
                                                            <option value="#778899" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#778899'></span><span>LightSlateGray</span></span>" />
                                                            <option value="#B0C4DE" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#B0C4DE'></span><span>LightSteelBlue</span></span>" />
                                                            <option value="#FFFFE0" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFFFE0'></span><span>LightYellow</span></span>" />
                                                            <option value="#00FF00" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#00FF00'></span><span>Lime</span></span>" />
                                                            <option value="#32CD32" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#32CD32'></span><span>LimeGreen</span></span>" />
                                                            <option value="#FAF0E6" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FAF0E6'></span><span>Linen</span></span>" />
                                                            <option value="#FF00FF" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FF00FF'></span><span>Magenta</span></span>" />
                                                            <option value="#800000" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#800000'></span><span>Maroon</span></span>" />
                                                            <option value="#66CDAA" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#66CDAA'></span><span>MediumAquamarine</span></span>" />
                                                            <option value="#0000CD" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#0000CD'></span><span>MediumBlue</span></span>" />
                                                            <option value="#BA55D3" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#BA55D3'></span><span>MediumOrchid</span></span>" />
                                                            <option value="#9370DB" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#9370DB'></span><span>MediumPurple</span></span>" />
                                                            <option value="#3CB371" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#3CB371'></span><span>MediumSeaGreen</span></span>" />
                                                            <option value="#7B68EE" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#7B68EE'></span><span>MediumSlateBlue</span></span>" />
                                                            <option value="#7B68EE" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#7B68EE'></span><span>MediumSlateBlue</span></span>" />
                                                            <option value="#00FA9A" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#00FA9A'></span><span>MediumSpringGreen</span></span>" />
                                                            <option value="#48D1CC" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#48D1CC'></span><span>MediumTurquoise</span></span>" />
                                                            <option value="#C71585" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#C71585'></span><span>MediumVioletRed</span></span>" />
                                                            <option value="#191970" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#191970'></span><span>MidnightBlue</span></span>" />
                                                            <option value="#F5FFFA" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#F5FFFA'></span><span>MintCream</span></span>" />
                                                            <option value="#FFE4E1" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFE4E1'></span><span>MistyRose</span></span>" />
                                                            <option value="#FFE4B5" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFE4B5'></span><span>Moccasin</span></span>" />
                                                            <option value="#FFDEAD" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFDEAD'></span><span>NavajoWhite</span></span>" />
                                                            <option value="#000080" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#000080'></span><span>Navy</span></span>" />
                                                            <option value="#FDF5E6" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FDF5E6'></span><span>OldLace</span></span>" />
                                                            <option value="#808000" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#808000'></span><span>Olive</span></span>" />
                                                            <option value="#6B8E23" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#6B8E23'></span><span>OliveDrab</span></span>" />
                                                            <option value="#FFA500" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFA500'></span><span>Orange</span></span>" />
                                                            <option value="#FF4500" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FF4500'></span><span>OrangeRed</span></span>" />
                                                            <option value="#DA70D6" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#DA70D6'></span><span>Orchid</span></span>" />
                                                            <option value="#EEE8AA" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#EEE8AA'></span><span>PaleGoldenrod</span></span>" />
                                                            <option value="#98FB98" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#98FB98'></span><span>PaleGreen</span></span>" />
                                                            <option value="#AFEEEE" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#AFEEEE'></span><span>PaleTurquoise</span></span>" />
                                                            <option value="#DB7093" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#DB7093'></span><span>PaleVioletRed</span></span>" />
                                                            <option value="#FFEFD5" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFEFD5'></span><span>PapayaWhip</span></span>" />
                                                            <option value="#FFDAB9" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFDAB9'></span><span>PeachPuff</span></span>" />
                                                            <option value="#CD853F" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#CD853F'></span><span>Peru</span></span>" />
                                                            <option value="#FFC0CB" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFC0CB'></span><span>Pink</span></span>" />
                                                            <option value="#DDA0DD" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#DDA0DD'></span><span>Plum</span></span>" />
                                                            <option value="#B0E0E6" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#B0E0E6'></span><span>PowderBlue</span></span>" />
                                                            <option value="#800080" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#800080'></span><span>Purple</span></span>" />
                                                            <option value="#FF0000" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FF0000'></span><span>Red</span></span>" />
                                                            <option value="#BC8F8F" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#BC8F8F'></span><span>RosyBrown</span></span>" />
                                                            <option value="#4169E1" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#4169E1'></span><span>RoyalBlue</span></span>" />
                                                            <option value="#8B4513" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#8B4513'></span><span>SaddleBrown</span></span>" />
                                                            <option value="#FA8072" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FA8072'></span><span>Salmon</span></span>" />
                                                            <option value="#F4A460" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#F4A460'></span><span>SandyBrown</span></span>" />
                                                            <option value="#2E8B57" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#2E8B57'></span><span>SeaGreen</span></span>" />
                                                            <option value="#FFF5EE" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFF5EE'></span><span>Seashell</span></span>" />
                                                            <option value="#A0522D" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#A0522D'></span><span>Sienna</span></span>" />
                                                            <option value="#C0C0C0" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#C0C0C0'></span><span>Silver</span></span>" />
                                                            <option value="#87CEEB" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#87CEEB'></span><span>SkyBlue</span></span>" />
                                                            <option value="#6A5ACD" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#6A5ACD'></span><span>SlateBlue</span></span>" />
                                                            <option value="#708090" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#708090'></span><span>SlateGray</span></span>" />
                                                            <option value="#FFFAFA" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFFAFA'></span><span>Snow</span></span>" />
                                                            <option value="#00FF7F" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#00FF7F'></span><span>SpringGreen</span></span>" />
                                                            <option value="#4682B4" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#4682B4'></span><span>SteelBlue</span></span>" />
                                                            <option value="#D2B48C" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#D2B48C'></span><span>Tan</span></span>" />
                                                            <option value="#008080" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#008080'></span><span>Teal</span></span>" />
                                                            <option value="#D8BFD8" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#D8BFD8'></span><span>Thistle</span></span>" />
                                                            <option value="#FF6347" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FF6347'></span><span>Tomato</span></span>" />
                                                            <option value="#40E0D0" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#40E0D0'></span><span>Turquoise</span></span>" />
                                                            <option value="#EE82EE" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#EE82EE'></span><span>Violet</span></span>" />
                                                            <option value="#F5DEB3" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#F5DEB3'></span><span>Wheat</span></span>" />
                                                            <option value="#FFFFFF" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFFFFF'></span><span>White</span></span>" />
                                                            <option value="#F5F5F5" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#F5F5F5'></span><span>WhiteSmoke</span></span>" />
                                                            <option value="#FFFF00" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#FFFF00'></span><span>Yellow</span></span>" />
                                                            <option value="#9ACD32" data-content="<span><span class='size-15px d-inline-block mr-2 rounded border' style='background:#9ACD32'></span><span>YellowGreen</span></span>" />
                                                        </select><button type="button" className="btn dropdown-toggle disabled btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-4" aria-haspopup="listbox" aria-expanded="false" data-id="colors" tabIndex={-1} aria-disabled="true" title="Nothing selected"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Nothing selected</div></div> </div></button><div className="dropdown-menu "><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-4" aria-autocomplete="list" /></div><div className="inner show" role="listbox" id="bs-select-4" tabIndex={-1} aria-multiselectable="true"><ul className="dropdown-menu inner show" role="presentation" /></div></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-1">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input defaultValue={1} type="checkbox" name="colors_active" />
                                                        <span />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group row gutters-5">
                                                <div className="col-md-3">
                                                    <input type="text" name="attribute" className="form-control" defaultValue="Attributes" fdprocessedid="9mqiul" onChange={onChangeHandler} />
                                                </div>
                                                <div className="col-md-8">
                                                    <select className="form-select" name="colors_attribute" aria-label="Default select example" onChange={onChangeHandler}>
                                                        <option>Nothing Selected</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                    <div className="dropdown bootstrap-select show-tick form-control aiz-">
                                                        <select name="choice_attributes[]" id="choice_attributes" className="form-control aiz-selectpicker" data-selected-text-format="count" data-live-search="true" multiple data-placeholder="Choose Attributes" tabIndex={-98}>
                                                            <option value={1}>Size</option>
                                                            <option value={2}>Fabric</option>
                                                        </select><button type="button" className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-5" aria-haspopup="listbox" aria-expanded="false" data-id="choice_attributes" title="Nothing selected" fdprocessedid="adpqve"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Nothing selected</div></div> </div></button><div className="dropdown-menu "><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-5" aria-autocomplete="list" /></div><div className="inner show" role="listbox" id="bs-select-5" tabIndex={-1} aria-multiselectable="true"><ul className="dropdown-menu inner show" role="presentation" /></div></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p>Choose the attributes of this product and then input values of each attribute</p>
                                                <br />
                                            </div>
                                            <div className="customer_choice_options" id="customer_choice_options">
                                            </div>
                                        </div>
                                    </div> */}
        </>
    )
}
export default ProductsVariation;