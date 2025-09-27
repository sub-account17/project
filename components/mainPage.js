const mainTeg = `
    <div class="Profile">
    </div>
    <p>병장 이광주</p>
    <p>2중대 지원소대 차량분대</p>
    <h2 style="margin: 0;">2025년 09월 26일</h2>
    <div style="display: flex;">
        <h4 style="margin: 0;">아침 점호 열외</h4>
        &nbsp<input type="checkbox" id="mCheck">
    </div>
    <input 
        type="text" 
        class ="Content" 
        id="morning" 
        onchange="mInput"
        placeholder="약어로 작성 ex) 근취">
    <div style="display: flex;">
        <h4 style="margin: 0;">일과 열외</h4>
        &nbsp<input type="checkbox" id="wCheck">
    </div>
    <input 
        type="text" 
        class="Content" 
        id="working" 
        onchange="wInput"
        placeholder="약어로 작성 ex) 근취">
    <div class="Post">
        <h3> 등록 </h3>
    </div>
`;

export {mainTeg};