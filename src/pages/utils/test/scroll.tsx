import React from 'react';

const ScrollPage: React.FC = () => {
  // 스크롤할 컴포넌트의 ID로 스크롤하는 함수
  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* 고정된 버튼들 */}
      <div style={{ position: 'fixed', top: '20px', left: '20px' }}>
        <button onClick={() => scrollToComponent('component1')}>컴포넌트 1로 이동</button>
        <br />
        <button onClick={() => scrollToComponent('component2')}>컴포넌트 2로 이동</button>
        <br />
        <button onClick={() => scrollToComponent('component3')}>컴포넌트 3로 이동</button>
      </div>

      {/* 스크롤되는 컴포넌트들 */}
      <div style={{ marginLeft: '100px', width: '100%' }}>
        <div id="component1" style={{ height: '500px', backgroundColor: 'lightblue' }}>
          컴포넌트 1
        </div>
        <div id="component2" style={{ height: '500px', backgroundColor: 'lightgreen' }}>
          컴포넌트 2
        </div>
        <div id="component3" style={{ height: '500px', backgroundColor: 'lightcoral' }}>
          컴포넌트 3
        </div>
      </div>
    </div>
  );
};

export default ScrollPage;