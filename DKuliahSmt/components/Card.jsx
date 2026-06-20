const Card = ({ icon, title, subtitle}) => (
    <article class="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div class="text-3xl mb-4">{ icon }</div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">{ title }</h3>
        <p class="text-gray-500 text-sm leading-relaxed">
                { subtitle }
        </p>
    </article>
)

export default Card;