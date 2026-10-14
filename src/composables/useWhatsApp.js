import { useI18n } from '@/composables/useI18n'

// TODO: trocar pelo número real (formato internacional, só dígitos: 55 + DDD + número)
export const WHATSAPP_NUMBER = '55519993626603'

/**
 * Monta links wa.me com mensagem pré-preenchida no idioma ativo
 * Chaves de mensagem ficam em editorWhatsapp.messages (i18n do editor)
 */
export function useWhatsApp() {
  const { t } = useI18n()

  /**
   * @param {string} [messageKey] - ex: 'general', 'youtube', 'shorts', 'thumbnails', 'finishing'
   * @param {string} [extra] - texto anexado ao fim da mensagem (ex: título do vídeo de referência)
   * @returns {string}
   */
  function whatsappLink(messageKey = 'general', extra = '') {
    const base = t(`editorWhatsapp.messages.${messageKey}`)
    const text = extra ? `${base} ${extra}` : base
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  }

  return { whatsappLink }
}
