<?php /* Template Name: Feng Shui */

get_header();


?>

    <div class="row" style="max-width:1200px; margin-left:auto; margin-right:auto;">
        <div class="col-lg-6">
            <div class="selection">
                <label>Selecteaza o directie:</label>
                <select id="selectDirection">
                    <option value="0"></option>
                    <option value="1">SUD</option>
                    <option value="2">SUD VEST</option>
                    <option value="3">VEST</option>
                    <option value="4">NORD VEST</option>
                    <option value="5">NORD</option>
                    <option value="6">NORD EST</option>
                    <option value="7">EST</option>
                    <option value="8">SUD EST</option>
                </select>
                <button class="btn-primary" name="submit" id="selectButton">Submit</button> 
            </div>
        </div>
        <div class="col-lg-6">
            <div class="harta">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="square"  id="square1">
                            <div class="text">
                                <h3 id="text1"></h3>
                            </div>                              
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="square" id="square2">
                            <div class="text">
                                <h3 id="text2"></h3>
                            </div>                              
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="square" id="square3">
                            <div class="text">
                                <h3 id="text3"></h3>
                            </div>                              
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4">
                        <div class="square" id="square4">
                            <div class="text">
                                <h3 id="text4"></h3>
                            </div>                              
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="square" id="square5">
                            <div class="text">
                                <h3 id="text5"></h3>
                            </div>                              
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="square" id="square6">
                            <div class="text">
                                <h3 id="text6"></h3>
                            </div>                              
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4">
                        <div class="square" id="square7">
                            <div class="text">
                                <h3 id="text7"></h3>
                            </div>                              
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="square" id="square8">
                            <div class="text">
                                <h3 id="text8"></h3>
                            </div>                              
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="square" id="square9">
                            <div class="text">
                                <h3 id="text9"></h3>
                            </div>                              
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>


<?php
get_footer();