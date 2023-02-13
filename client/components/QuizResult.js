import React from 'react'

export default function QuizResult() {
  return (
    <>
    <div
    
    
    style={{
        marginTop: "15%",
      }}
    ></div>
        <div className='quiz_head'>
		<h1> FSc – QUIZ BANKS</h1> </div>
        <h5 className='board_title main-heading text-center mt-5'>PHYSICS - PART I<br />PUNJAB BOARD</h5>
			<h6 className='sub_heading text-center mt-4'>COMPLETE QUIZ BANK</h6>
			<h1 className='main-heading text-center mt-4'>RESULT</h1>
			<h6 className='sub_heading text-center mt-4 Score text_green'> Score: <br/>45/60</h6>
            <div className='quiz_paper mt-5 result_wrap'>
				<div className='result_list'>
					<div class="lender-with-cross">
						<ul>
							<li class="option">
								<input type="checkbox" name="lightest-gas" value="" id="Oxygen" class="custom-checkbox" />
								<label class=" bg_success" for="Oxygen"><span class="option_title title_1">A</span></label> <span className='nubmer'>1</span> </li>
							<li class="option">
								<input type="checkbox" name="lightest-gas" id="Hydrogen" class="custom-checkbox" />
								<label class=" bg_success" for="Hydrogen"><span class="option_title title_1">B</span></label> <span className='nubmer'>2</span> </li>
							<li class="option">
								<input type="checkbox" name="lightest-gas" id="Carbon_dioxide" class="custom-checkbox" />
								<label class="bg_wrong" for="Carbon_dioxide"><span class="option_title title_1"> C</span></label> <span className='nubmer'>3</span> </li>
							<li class="option">
								<input type="checkbox" name="lightest-gas" id="Argon" class="custom-checkbox" />
								<label class="bg_success" for="Argon"><span class="option_title title_1"> D</span></label> <span className='nubmer'>4</span> </li>
						</ul>
					</div>
					<div class="lender-with-cross">
						<ul>
							<li class="option">
								<input type="checkbox" name="lightest-gas" value="" id="one" class="custom-checkbox" />
								<label class=" bg_wrong" for="one"><span class="option_title title_1">A</span></label> <span className='nubmer'>5</span> </li>
							<li class="option">
								<input type="checkbox" name="lightest-gas" id="two" class="custom-checkbox" />
								<label class=" bg_success" for="two"><span class="option_title title_1">B</span></label> <span className='nubmer'>6</span> </li>
							<li class="option">
								<input type="checkbox" name="lightest-gas" id="three" class="custom-checkbox" />
								<label class="bg_success" for="three"><span class="option_title title_1"> C</span></label> <span className='nubmer'>7</span> </li>
							<li class="option">
								<input type="checkbox" name="lightest-gas" id="four" class="custom-checkbox" />
								<label class="bg_wrong" for="four"><span class="option_title title_1"> D</span></label> <span className='nubmer'>8</span> </li>
						</ul>
					</div>
					<div class="lender-with-cross">
						<ul>
							<li class="option">
								<input type="checkbox" name="lightest-gas" value="" id="five" class="custom-checkbox" />
								<label class=" bg_success" for="five"><span class="option_title title_1">A</span></label> <span className='nubmer'>9</span> </li>
							<li class="option">
								<input type="checkbox" name="lightest-gas" id="six" class="custom-checkbox" />
								<label class=" bg_wrong" for="six"><span class="option_title title_1">B</span></label> <span className='nubmer'>10</span> </li>
							<li class="option">
								<input type="checkbox" name="lightest-gas" id="seven" class="custom-checkbox" />
								<label class="bg_wrong" for="seven"><span class="option_title title_1"> C</span></label> <span className='nubmer'>11</span> </li>
							<li class="option">
								<input type="checkbox" name="lightest-gas" id="eight" class="custom-checkbox" />
								<label class="bg_success" for="eight"><span class="option_title title_1"> D</span></label> <span className='nubmer'>12</span> </li>
						</ul>
					</div>
				</div>
			</div>
</>
  )
}
