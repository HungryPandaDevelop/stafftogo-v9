const RenderTitle = (label, index) => (<h3 className={`${index === 1 ? 'first-topic' : ''}`}>{label}</h3>);

export default RenderTitle;